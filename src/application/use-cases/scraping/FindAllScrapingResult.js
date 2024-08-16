const ScrapingResultRepository = require("../../../infrastructure/repositories/ScrapingResultRepository");

class FindAllScrapingResult {
  constructor() {
    this.scrapingResultRepository = new ScrapingResultRepository();
  }

  async execute() {
    return await this.scrapingResultRepository.findAll();
  }
}

module.exports = FindAllScrapingResult;