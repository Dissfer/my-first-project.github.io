document.addEventListener('DOMContentLoaded', function() {
    const loadMoreBtn = document.getElementById('load-more-btn');
    const moviesContainer = document.querySelector('.container');

    // Проверяем существование элементов
    if (!loadMoreBtn || !moviesContainer) {
        console.error('Не найдены необходимые элементы на странице!');
        return;
    }

    // Данные для дополнительных фильмов
    const additionalMovies = [
        {
            title: "Тёмный рыцарь",
            image: "darkknight.jpg",
            link: "https://rutube.ru/video/74fb252e6f3a0e6eaedb0909dc6eaf29/",
            description: "Бэтмен сталкивается со своим самым опасным противником - Джокером."
        },
        {
            title: "Форрест Гамп",
            image: "forrest.jpg",
            link: "https://rutube.ru/video/57fbde6070148b48688ac620ec9475d5/",
            description: "История простого человека с добрым сердцем, который стал свидетелем ключевых событий американской истории."
        },
        {
            title: "Конец евангелиона",
            image: "6721743914.jpg",
            link: "https://rutube.ru/video/8e95d5df153a92ae6fbe384842fde5ac/",
            description: "Фильм завершающий сюжет легендарного аниме 'Евангелион' "
        },
        {
            title: "Криминальное чтиво",
            image: "Pulp_Fiction.jpg",
            link: "https://rutube.ru/video/dde90105f5871177b07351e19ce01e21/",
            description: "Несколько переплетающихся историй из жизни бандитов, киллеров и авантюристов, рассказанных с фирменным тарантиновским стилем: чёрный юмор, острые диалоги и нелинейный сюжет. Культовый фильм, перевернувший независимое кино 90-х."
        }
    ];

    // Функция создания карточки фильма
    function createMovieCard(movie) {
        const movieElement = document.createElement('div');
        movieElement.className = 'movie';
        movieElement.innerHTML = `
            <h2>${movie.title}</h2>
            <img src="${movie.image}" alt="${movie.title}" loading="lazy">
            <a href="${movie.link}" target="_blank">Подробнее</a>
            <p>${movie.description}</p>
        `;
        return movieElement;
    }

    // Обработчик клика по кнопке
    loadMoreBtn.addEventListener('click', function() {
        try {
            // Добавляем новые фильмы
            additionalMovies.forEach(movie => {
                moviesContainer.appendChild(createMovieCard(movie));
            });

            // Скрываем кнопку после загрузки
            this.style.display = 'none';

            // Плавная прокрутка к новым элементам
            const lastMovie = moviesContainer.lastElementChild;
            lastMovie.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

        } catch (error) {
            console.error('Ошибка при загрузке фильмов:', error);
            this.textContent = 'Ошибка загрузки';
            this.style.backgroundColor = '#ff4444';
        }
    });

    // Анимация при наведении на кнопку
    loadMoreBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });



    loadMoreBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});