const ScrapingTargetsRepository = require("../../../infrastructure/repositories/ScrapingTargetsRepository");

class DeleteScrapingTargets {
  constructor() {
    this.scrapingTargetsRepository = new ScrapingTargetsRepository();
  }

  async execute(id) {
    return await this.scrapingTargetsRepository.delete(id);
  }
}

module.exports = DeleteScrapingTargets;