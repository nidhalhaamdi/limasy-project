const { getPower, postPower } = require("../../models/power.model");

async function httpGetPower(req, res) {
    return res.status(200).json(await getPower());
}

async function httpPostPower(req, res) {
    const state = req.body;
    await postPower(state);
    return res.status(201).json(state);
    // return res.status(200).json(await postPower());
}

module.exports = {
    httpGetPower,
    httpPostPower,
};