const { getCurrents, saveNewCurrent } = require("../../models/current.model");

async function httpGetCurrents(req, res) {
    return res.status(200).json(await getCurrents());
}

async function httpSaveCurrent(req, res) {
    const value = req.body;
    await saveNewCurrent(value);
    return res.status(201).json(value);
    // return res.status(200).json(await saveNewCurrent());
}

module.exports = {
    httpGetCurrents,
    httpSaveCurrent,
};