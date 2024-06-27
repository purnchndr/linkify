const express = require('express');
const Router = express.Router();

const { getlinkAndRedirect } = require('../controllers/links');

Router.route('/:id').get(getlinkAndRedirect);

module.exports = Router;
