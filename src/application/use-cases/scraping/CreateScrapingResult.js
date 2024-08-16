const ScrapingResultRepository = require("../../../infrastructure/repositories/ScrapingResultRepository");

class CreateScrapingResult {
  constructor() {
    this.scrapingResultRepository = new ScrapingResultRepository();
  }

  async execute(targetId, value) {
    return await this.scrapingResultRepository.insert( targetId, value );
  }
}

module.exports = CreateScrapingResult;