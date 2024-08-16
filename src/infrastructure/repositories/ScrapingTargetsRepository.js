const db = require("../orm/database");

class ScrapingTargetsRepository {
  findAll() {
    return new Promise((resolve, reject) => {
      db.all("SELECT * FROM scraping_targets", (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  }

  insert(websiteUrl, targetTag, type) {
    return new Promise((resolve, reject) => {
      db.run("INSERT INTO scraping_targets (websiteUrl, targetTag, type) VALUES (?, ?, ?)", [websiteUrl, targetTag, type], (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  delete(id) {
    return new Promise((resolve, reject) => {
      db.run("DELETE FROM scraping_targets WHERE id = ?", id, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }
}

module.exports = ScrapingTargetsRepository;