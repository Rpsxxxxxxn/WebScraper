const ScrapingResultRepository = require("../../../infrastructure/repositories/ScrapingResultRepository");

class FindScrapingResult {
  constructor() {
    this.scrapingResultRepository = new ScrapingResultRepository();
  }

  async execute(id) {
    return await this.scrapingResultRepository.find(id);
  }
}

module.exports = FindScrapingResult;