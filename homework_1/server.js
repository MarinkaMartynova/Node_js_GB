const http = require('http');
let count = {
    '/': 0,
    '/about': 0
};

const server = http.createServer((req, res) => {    
    console.log('Запрос получен');
    
    if (req.url === '/') {
        count['/'] ++;
        res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
        res.write('<h1>Корневая страница</h1>');
        res.end(`Вы посетили эту страницу ${count['/']} раз(а) <br><br><a href="/about">Перейти на страницу "about"</a> \n`);

    } else if (req.url === '/about') {
        count['/about'] ++;
        res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
        res.write('<h1>Страница about</h1>');
        res.end(`Вы посетили страницу about ${count['/about']} раз(а) <br><br><a href="/">Перейти на страницу "Корневая"</a>\n`);

    } else {
        res.writeHead(404, { 'Content-Type': 'text/html; charset=UTF-8' });
        res.end('<h1>Страница не найдена!</h1>');
    };
});

const port = 3000;

server.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});

