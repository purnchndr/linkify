const express = require('express');

const Router = express.Router();

const {
  getAllLinks,
  createLink,
  getlink,
  getlinkAndRedirect,
  deleteLink,
  getLinksByAuthor,
} = require('../controllers/links');

Router.route('/').get(getAllLinks).post(createLink);
Router.route('/:id').get(getlink).delete(deleteLink);
Router.route('/rd/:id').get(getlinkAndRedirect);
Router.route('/user/:author').get(getLinksByAuthor);

module.exports = Router;
