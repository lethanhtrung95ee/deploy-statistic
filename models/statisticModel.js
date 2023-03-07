const mongoose = require('mongoose');

const StatisticSchema = new mongoose.Schema({
    count: Number,
    /*1: waiting birthday
    /*2: watch video initial
    /*3: start video
    /*4: pause video
    * */
    status: Number,
    dateOfBirth: Date
}, { versionKey: false });

module.exports = mongoose.model('statistic', StatisticSchema);