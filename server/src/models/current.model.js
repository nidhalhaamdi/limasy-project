const Current = require('./current.mongo');

async function populateCurrents() {
    const currentDocs = [
        {
            currentValue: 100,
            date: new Date('2022-07-02T23:37:02.000Z')
        },
        {
            currentValue: 200,
            date: new Date('2022-07-02T23:31:22.000Z')
        },
        {
            currentValue: 300,
            date: new Date('2022-07-02T23:20:30.000Z')
        },
        {
            currentValue: 400,
            date: new Date('2022-07-02T23:11:04.000Z')
        },
        {
            currentValue: 500,
            date: new Date('2022-07-02T23:07:56.000Z')
        },
        {
            currentValue: 600,
            date: new Date('2022-07-02T23:05:16.000Z')
        }
    ];

    for (const currentDoc of currentDocs) {
        const current = {
            currentValue: currentDoc['currentValue'],
            date: currentDoc['date']
        };

        console.log(`${current.currentValue} ${current.date}`);

        await saveCurrent(current);
    }
}

async function loadCurrentData() {
    const firstCurrent = await findCurrent({
        currentValue: 100
    });

    if (firstCurrent) {
        console.log('Current Data already loaded!');
    } else {
        await populateCurrents();
    }
}

async function findCurrent(filter) {
    return await Current.findOne(filter);
}

async function saveCurrent(current) {
    await Current.findOneAndUpdate({
        currentValue: current.currentValue,
    }, current , {
        upsert: true,
    });
}

async function saveNewCurrent(req, res) {
    // create new CurrentValue using the schema
    const newCurrentValue = new Current({
        currentValue: req.body.currentValue,
    });
    // save value to database
    await newCurrentValue.save()
        .then(currentValue => res.json(currentValue));
    console.log(req.body);
}

async function getCurrents() {
    return await Current.find({}, {
        '_id': 0, '__v': 0, 'date': 0
    })
    .sort({_id:1})
    .limit(6);
}

module.exports = {
    getCurrents,
    saveNewCurrent,
    loadCurrentData,
};