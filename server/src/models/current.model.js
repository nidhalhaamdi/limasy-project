const Current = require('./current.mongo');

async function saveNewCurrent(value) {
    // create new CurrentValue using the schema
    const newCurrentValue = new Current({
        currentValue: value.currentValue,
    });
    // save value to database
    await newCurrentValue.save();
}

async function getCurrents() {
    return await Current.find({}, {
        '_id': 0, '__v': 0,
    })
    .sort({_id:-1})
    .limit(6);
}

module.exports = {
    getCurrents,
    saveNewCurrent,
};