const db = require("../orm/database");

class CronScheduleRepository {
  select(id) {
    return new Promise((resolve, reject) => {
      db.get("SELECT * FROM cron_schedule WHERE id = ?", [id], (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  }

  update(id, schedule) {
    return new Promise((resolve, reject) => {
      db.run("UPDATE cron_schedule SET schedule = ? WHERE id = ?", [schedule, id], (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
}

module.exports = CronScheduleRepository;