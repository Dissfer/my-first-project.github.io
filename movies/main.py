from flask import Flask, render_template_string, request
# Наши дополнительные фильмы
additional_movies = [
    {
        "title": "Темный рыцарь",
        "image": "darkknight.jpg",
        "link": "https://www.example.com/darkknight",
        "description": "Бэтмен сталкивается со своим самым опасным противником - Джокером."
    },
    {
        "title": "Форрест Гамп",
        "image": "forrest.jpg",
        "link": "https://www.example.com/forrest",
        "description": "История простого человека с добрым сердцем, который стал свидетелем ключевых событий американской истории."
    }
]