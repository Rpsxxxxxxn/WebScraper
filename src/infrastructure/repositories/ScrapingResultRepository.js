const db = require("../orm/database");

class ScrapingResultRepository {
  findAll() {
    return new Promise((resolve, reject) => {
      db.all("SELECT * FROM scraping_results", (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  find(id) {
    return new Promise((resolve, reject) => {
      db.get("SELECT * FROM scraping_results WHERE id = ?", id, (err, row) => {
        if (err) {
          reject(err);
        } else {
          resolve(row);
        }
      });
    });
  }

  insert(targetId, value) {
    return new Promise((resolve, reject) => {
      db.run("INSERT INTO scraping_results (targetId, value) VALUES (?, ?)", [targetId, value], (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
}

module.exports = ScrapingResultRepository;