class ScrapingResult {
  constructor(id, targetId, value, timestamp) {
    this.id = id;
    this.targetId = targetId;
    this.value = value;
    this.timestamp = timestamp;
  }
}

module.exports = ScrapingResult;