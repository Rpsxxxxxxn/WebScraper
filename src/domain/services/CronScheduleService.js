const cron = require('node-cron');
const axios = require('axios');
const cheerio = require('cheerio');
const CreateScrapingResult = require('../../application/use-cases/scraping/CreateScrapingResult');
const FindAllScrapingTargets = require('../../application/use-cases/scraping/FindAllScrapingTargets');

class CronScheduleService {
  constructor() {
    this.currentCronJob = null;
    this.createScrapingResult = new CreateScrapingResult();
    this.findAllScrapingTargets = new FindAllScrapingTargets();
  }

  async startCronJob(schedule) {
    if (this.currentCronJob) {
      this.currentCronJob.stop();
    }

    this.currentCronJob = cron.schedule(schedule, async () => {
      console.log('******** Cron動作中 ********');

      const targets = await this.findAllScrapingTargets.execute();
      for (const target of targets) {
        await scrapeWebsite(target.id, target.websiteUrl, target.targetTag, target.type);
      }
    });
  }

  async scrapeWebsite(targetId, websiteUrl, targetTag) {
    try {
      const response = await axios.get(websiteUrl);
      const html = response.data;
      const $ = cheerio.load(html);

      const element = $(targetTag);
      let value = element.text().match(/\d+/g)?.join('') || '';

      console.log(`数値タグ ${targetTag} on ${websiteUrl}: ${value}`);

      await this.createScrapingResult.execute(targetId, value);
    } catch (error) {
      console.error('Error scraping the website:', error);
    }
  }
}

module.exports = CronScheduleService;