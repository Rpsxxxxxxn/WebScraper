const CronScheduleController = require("../controllers/CronScheduleController");
const cronScheduleController = new CronScheduleController();
const router = require("express").Router();

router.post('set-schedule', (req, res) => cronScheduleController.setSchedule(req, res));

module.exports = router;