const express = require('express');
const app = express();
const axios = require('axios');
const qs = require('qs');

// Замените <CLIENT_ID> и <CLIENT_SECRET> своими реальными ключами
const CLIENT_ID = '8526362bbc5e9ccedc80';
const CLIENT_SECRET = 'b4056289128c49a517615a913c9b67dd76b9c3c6';

// Маршрут для авторизации с GitHub
app.get('/login/github', (req, res) => {
  const redirect_uri = 'https://test-76fad.web.app'; // Замените на URL вашего сайта
  const url = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${redirect_uri}&scope=user`;
  res.redirect(url);
});

// Маршрут для обратного вызова после авторизации с GitHub
app.get('/login/github/callback', async (req, res) => {
  const code = req.query.code;
  const data = {
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    code: code
  };
  try {
    // Получить токен доступа от GitHub
    const response = await axios.post('https://github.com/login/oauth/access_token', data, {
      headers: {
        accept: 'application/json'
      }
    });
    const access_token = response.data.access_token;

    // Получить данные пользователя от GitHub
    const userResponse = await axios.get('https://api.github.com/user', {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${access_token}`
      }
    });
    const userData = userResponse.data;

    // Здесь вы можете выполнить любую логику с полученными данными пользователя от GitHub

    // Возвращаем токен доступа в качестве ответа
    res.send(access_token);
  } catch (error) {
    console.error(error);
    res.status(500).send('Возникла ошибка');
  }
});

// Запуск сервера
app.listen(5000, () => {
  console.log('Сервер запущен на порту 5000');
});
