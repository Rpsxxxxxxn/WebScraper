const CronScheduleRepository = require("../../../infrastructure/repositories/CronScheduleRespository");

class UpdateCronSchedule {
  constructor() {
    this.cronScheduleRepository = new CronScheduleRepository();
  }

  async execute(schedule) {
    return this.cronScheduleRepository.update(1, schedule);
  }
}

module.exports = UpdateCronSchedule;