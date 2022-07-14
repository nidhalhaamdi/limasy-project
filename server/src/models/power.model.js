const Power1 = require('./power1.mongo');
const Power2 = require('./power2.mongo');
const Power3 = require('./power3.mongo');

// GET

async function getPower1() {
    // get last item saved in db
    return await Power1.find({}, { '_id': 0, '__v': 0, }).sort({_id:-1}).limit(1);
}

async function getPower2() {
    // get last item saved in db
    return await Power2.find({}, { '_id': 0, '__v': 0, }).sort({_id:-1}).limit(1);
}

async function getPower3() {
    // get last item saved in db
    return await Power3.find({}, { '_id': 0, '__v': 0, }).sort({_id:-1}).limit(1);
}

// POST

async function postPower1(state) {
    // create new power data using the schema
    const powerData1 = new Power1({
        data: state.data
    });
    // save value to database
    await powerData1.save();
}

async function postPower2(state) {
    // create new power data using the schema
    const powerData2 = new Power2({
        data: state.data
    });
    // save value to database
    await powerData2.save();
}

async function postPower3(state) {
    // create new power data using the schema
    const powerData3 = new Power3({
        data: state.data
    });
    // save value to database
    await powerData3.save();
}

module.exports = {
    getPower1,
    getPower2,
    getPower3,
    postPower1,
    postPower2,
    postPower3,
};