const ScrapingTargetsRepository = require("../../../infrastructure/repositories/ScrapingTargetsRepository");

class CreateScrapingTargets {
  constructor() {
    this.scrapingTargetsRepository = new ScrapingTargetsRepository();
  }

  async execute(websiteUrl, targetTag, type) {
    return await this.scrapingTargetsRepository.insert(websiteUrl, targetTag, type);
  }
}

module.exports = CreateScrapingTargets;