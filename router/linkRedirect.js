const express = require('express');
const Router = express.Router();

const { getlinkAndRedirect, welcome } = require('../controllers/links');

Router.route('/').get(welcome);
Router.route('/:id').get(getlinkAndRedirect);

module.exports = Router;
