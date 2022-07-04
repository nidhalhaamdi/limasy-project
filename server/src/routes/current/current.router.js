const express = require('express');

const {
    httpGetCurrents,
    httpSaveCurrent,
} = require('./current.controller');

const currentRouter = express.Router();

// handle get requests
// sends the last 7 values
// react app sends this get request

currentRouter.get('/', httpGetCurrents);

// handle post requests

currentRouter.post('/', httpSaveCurrent);


module.exports = currentRouter;