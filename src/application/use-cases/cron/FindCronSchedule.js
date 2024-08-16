const CronScheduleRepository = require("../../../infrastructure/repositories/CronScheduleRespository");

class FindCronSchedule {
  constructor() {
    this.cronRepository = new CronScheduleRepository();
  }

  async execute(id = 1) {
    return await this.cronRepository.select(id);
  }
}

module.exports = FindCronSchedule;