const { 
    getPower1,
    getPower2,
    getPower3,
    postPower1,
    postPower2,
    postPower3,
} = require("../../models/power.model");

// GET

async function httpGetPower1(req, res) {
    return res.status(200).json(await getPower1());
}

async function httpGetPower2(req, res) {
    return res.status(200).json(await getPower2());
}

async function httpGetPower3(req, res) {
    return res.status(200).json(await getPower3());
}
 
// POST

async function httpPostPower1(req, res) {
    const state = req.body;
    await postPower1(state);
    return res.status(201).json(state);
    // return res.status(200).json(await postPower());
}

async function httpPostPower2(req, res) {
    const state = req.body;
    await postPower2(state);
    return res.status(201).json(state);
    // return res.status(200).json(await postPower());
}

async function httpPostPower3(req, res) {
    const state = req.body;
    await postPower3(state);
    return res.status(201).json(state);
    // return res.status(200).json(await postPower());
}

module.exports = {
    httpGetPower1,
    httpGetPower2,
    httpGetPower3,
    httpPostPower1,
    httpPostPower2,
    httpPostPower3,
};