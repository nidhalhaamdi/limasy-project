const express = require('express');

const {
    httpGetPower1,
    httpGetPower2,
    httpGetPower3,
    httpPostPower1,
    httpPostPower2,
    httpPostPower3,
} = require('./power.controller');

const powerRouter = express.Router();

// User will post the req.body (data) from the front
powerRouter.post('/line1', httpPostPower1);
powerRouter.post('/line2', httpPostPower2);
powerRouter.post('/line3', httpPostPower3);

// Device will get the order
powerRouter.get('/line1', httpGetPower1);
powerRouter.get('/line2', httpGetPower2);
powerRouter.get('/line3', httpGetPower3);

module.exports = powerRouter;