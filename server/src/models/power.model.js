const Power = require('./power.mongo');

async function getPower() {
    // get last item saved in db
    return await Power.find({}, { '_id': 0, '__v': 0, }).sort({_id:-1}).limit(1);
}

async function postPower(state) {
    // create new power data using the schema
    const powerData = new Power({
        data: state.data
    });
    // save value to database
    await powerData.save();
}

module.exports = {
    getPower,
    postPower,
};