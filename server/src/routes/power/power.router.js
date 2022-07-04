const express = require('express');

const {
    httpPostPower,
    httpGetPower,
} = require('./power.controller');

const powerRouter = express.Router();

// User will post the req.body (data) from the front
powerRouter.post('/', httpPostPower);

// Device will get the order
powerRouter.get('/', httpGetPower);

module.exports = powerRouter;