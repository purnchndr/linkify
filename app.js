const express = require('express');
const app = express();

const linkRouter = require('./router/link');
const linkRiderect = require('./router/linkRedirect');
app.use(express.json());

app.use('/', linkRiderect);
app.use('/api/links', linkRouter);
app.all('*', (req, res) => {
  res
    .status(400)
    .json({ message: 'wrong request, check route path', code: 'wrong_route' });
});

module.exports = app;
