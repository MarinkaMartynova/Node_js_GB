const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
    
    const pathToFileHome = path.join(__dirname, 'counter.json');
    const userCountHomeData = JSON.parse(fs.readFileSync(pathToFileHome, 'utf-8'));

    userCountHomeData.countHome = userCountHomeData.countHome + 1;

    fs.writeFileSync(pathToFileHome, JSON.stringify(userCountHomeData, null, 2));

    res.send(`<h1>Главная страница</h1><p>Просмотров: ${userCountHomeData.countHome}</p><a href="/about">Ссылка на страницу Обо мне</a>`);
});

app.get('/about', (req, res) => {

    const pathToFileAbout = path.join(__dirname, 'counter.json');
    const userCountAboutData = JSON.parse(fs.readFileSync(pathToFileAbout, 'utf-8'));

    userCountAboutData.countAbout = userCountAboutData.countAbout + 1;

    fs.writeFileSync(pathToFileAbout, JSON.stringify(userCountAboutData, null, 2));

    res.send(`<h1>Обо Мне</h1><p>Просмотров: ${userCountAboutData.countAbout}</p><a href="/">Ссылка на главную страницу</a>`);
});

const port = 3000;

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
