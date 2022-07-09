const express = require('express');

const currentRouter = require('./current/current.router');
const powerRouter = require('./power/power.router');
const userRouter = require('./user/user.router');

const api = express.Router();

api.use('/user', userRouter);
api.use('/current', currentRouter);
api.use('/power', powerRouter);

module.exports = api;