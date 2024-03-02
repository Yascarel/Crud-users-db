const { getAll, create, getOne, remove, update } = require('../controllers/users.controllers');
const express = require('express');

const routerName = express.Router();

routerName.route('/users')
    .get(getAll)
    .post(create);

routerName.route('/users/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerName;