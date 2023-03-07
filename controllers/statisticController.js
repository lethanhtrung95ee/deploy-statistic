const Statistic = require('../models/statisticModel');

module.exports.getAll = async function (req, res, next) {
    try {
        const {status} = req.params;
        const results = await Statistic.findOne({status: status})
        res.json(results);
    } catch (error) {
        next(error);
    }
}
module.exports.waitingBirthday = async function (req, res, next) {
    try {
        Statistic.create(req.body);
    } catch (error) {
        next(error);
    }
}
module.exports.watchVideoInitial = async function (req, res, next) {
    try {
        Statistic.create(req.body);
    } catch (error) {
        next(error);
    }
}
module.exports.startVideo = async function (req, res, next) {
    try {
        Statistic.create(req.body);
    } catch (error) {
        next(error);
    }
}
module.exports.pauseVideo = async function (req, res, next) {
    try {
        Statistic.create(req.body);
    } catch (error) {
        next(error);
    }
}