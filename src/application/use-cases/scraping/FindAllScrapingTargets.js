const ScrapingTargetsRepository = require("../../../infrastructure/repositories/ScrapingTargetsRepository");

class FindAllScrapingTargets {
  constructor() {
    this.scrapingTargetsRepository = new ScrapingTargetsRepository();
  }

  async execute() {
    return await this.scrapingTargetsRepository.findAll();
  }
}

module.exports = FindAllScrapingTargets;