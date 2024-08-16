const UpdateCronSchedule = require("../../application/use-cases/cron/UpdateCronSchedule");
const CronScheduleService = require("../../domain/services/CronScheduleService");

class CronScheduleController {
  constructor() {
    this.updateCronSchedule = new UpdateCronSchedule();
    this.cronScheduleService = new CronScheduleService();
  }

  async setSchedule(req, res) {
    const newSchedule = req.body.schedule;

    try {
      // DBのスケジュールを更新し、cronジョブを再起動
      await this.updateCronSchedule.execute(newSchedule);
      await this.cronScheduleService.startCronJob(newSchedule);
      res.redirect('/');
    } catch (err) {
      res.status(500).send('スケジュールの更新に失敗しました。');
    }
  }

  async startCronJob(req, res) {
    try {
      await this.cronScheduleService.startCronJob();
      res.redirect('/');
    } catch (err) {
      res.status(500).send('cronジョブの開始に失敗しました。');
    }
  }
}

module.exports = CronScheduleController;