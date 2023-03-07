const router = require('express').Router();
const statisticController = require('../controllers/statisticController');

router.post("/get-all/:status",(statisticController.getAll));
router.post("/waiting-birthday",(statisticController.waitingBirthday));
router.post("/watch-video-initial",(statisticController.watchVideoInitial));
router.post("/start-video",(statisticController.startVideo));
router.post("/pause-video",(statisticController.pauseVideo));

module.exports = router;