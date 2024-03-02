const express = require('express');
const router = express.Router();
const usersRouter = require('./users.router');

// colocar las rutas aquí
router.use(usersRouter);

module.exports = router;