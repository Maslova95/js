// 1

const http = require('http');
const os = require('os');
const path = require('path');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  const username = os.userInfo().username;
  const osType = os.type();
  const uptime = Math.floor(os.uptime() / 60); // час роботи системи в хвилинах
  const currentDir = process.cwd(); // поточна робоча директорія
  const serverFilename = path.basename(__filename); // назва файлу сервера

  const response = `
    <h1>Інформація про систему</h1>
    <p>Ім'я користувача: ${username}</p>
    <p>Тип операційної системи: ${osType}</p>
    <p>Час роботи системи (в хвилинах): ${uptime}</p>
    <p>Поточна робоча директорія: ${currentDir}</p>
    <p>Назва файлу сервера: ${serverFilename}</p>
  `;

  res.end(response);
});

server.listen(5000, 'localhost', () => {
  console.log('Сервер запущено на http://localhost:5000/');
});


// 2

const http = require('http');
const os = require('os');
const path = require('path');
const personalModule = require('./personalmodule');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  const username = os.userInfo().username;
  const currentTime = new Date().toString();
  const greeting = personalModule.greetUser(username);

  const response = `Date of request: ${currentTime}\n${greeting}`;

  res.end(response);
});

server.listen(5000, 'localhost', () => {
  console.log('Сервер запущено на http://localhost:5000/');
});
