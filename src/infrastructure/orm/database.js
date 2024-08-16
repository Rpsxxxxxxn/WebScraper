const sqlite3 = require('sqlite3').verbose();
const util = require('util');

const db = new sqlite3.Database('./web.db');

// db.run = util.promisify(db.run);
// db.get = util.promisify(db.get);
// db.all = util.promisify(db.all);

db.serialize(() => {
  console.log('********* Creating tables *********');

  db.run("CREATE TABLE IF NOT EXISTS scraping_targets (id INTEGER PRIMARY KEY AUTOINCREMENT, websiteUrl TEXT, targetTag TEXT, type TEXT)");
  db.run("CREATE TABLE IF NOT EXISTS cron_schedule (id INTEGER PRIMARY KEY AUTOINCREMENT, schedule TEXT)");
  db.run("CREATE TABLE IF NOT EXISTS scraping_results (id INTEGER PRIMARY KEY AUTOINCREMENT, targetId INTEGER, value TEXT, timestamp DATETIME DEFAULT CURRENT_TIMESTAMP)");

  // 初期スケジュールを設定
  console.log('********* Creating data *********');
  const row = db.get("SELECT schedule FROM cron_schedule WHERE id = 1");
  if (!row.schedule) {
      db.run("INSERT INTO cron_schedule (schedule) VALUES ('* * * * *')");
  }
});

module.exports = db;