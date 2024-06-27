const express = require('express');
const app = express();

const linkRouter = require('./router/link');
const linkRiderect = require('./router/linkRedirect');
app.use(express.json());

app.use('/', linkRiderect);
app.use('/api/links', linkRouter);

module.exports = app;
