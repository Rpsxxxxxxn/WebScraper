const FindCronSchedule = require("../../application/use-cases/cron/FindCronSchedule");
const CreateScrapingTargets = require("../../application/use-cases/scraping/CreateScrapingTargets");
const DeleteScrapingTargets = require("../../application/use-cases/scraping/DeleteScrapingTargets");
const FindAllScrapingResult = require("../../application/use-cases/scraping/FindAllScrapingResult");
const FindAllScrapingTargets = require("../../application/use-cases/scraping/FindAllScrapingTargets");
const FindScrapingResult = require("../../application/use-cases/scraping/FindScrapingResult");

class ScrapingController {
  constructor() {
    this.findCronSchedule = new FindCronSchedule();
    this.findAllScrapingTargets = new FindAllScrapingTargets();
    this.findAllScrapingResult = new FindAllScrapingResult();
    this.findScrapingResult = new FindScrapingResult();
    this.createScrapingTargets = new CreateScrapingTargets();
    this.deleteScrapingTargets = new DeleteScrapingTargets();
  }

  // エンドポイントの設定
  async index(req, res) {
    try {
      console.log('******** 初期ページ ********');
      const scheduleRow = await this.findCronSchedule.execute();
      const targets = await this.findAllScrapingTargets.execute();
      const results = await this.findAllScrapingResult.execute();

      res.render('index', { schedule: scheduleRow.schedule, targets: targets, results: results });
    } catch (err) {
      res.status(500).send('システムエラーが発生しました。');
    }
  }

  // 特定のターゲットの結果を表示するエンドポイント
  async findTargets(req, res) {
    const targetId = req.params.id;
    try {
      const results = await this.findScrapingResult.execute(targetId);
      const labels = results.map(result => result.timestamp);
      const values = results.map(result => result.value);

      res.render('target', { targetId, labels, values });
    } catch (err) {
      res.status(500).send('システムエラーが発生しました。');
    }
  }

  // スクレイピングターゲットを追加するエンドポイント
  async addTarget(req, res) {
    const { websiteUrl, targetTag, type } = req.body;

    try {
      await this.createScrapingTargets.execute(websiteUrl, targetTag, type);
      res.redirect('/');
    } catch (err) {
      res.status(500).send('システムエラーが発生しました。');
    }
  }

  // スクレイピングターゲットを削除するエンドポイント
  async deleteTarget(req, res) {
    const targetId = req.params.id;
    try {
      await this.deleteScrapingTargets.execute(targetId);
      res.redirect('/');
    } catch (err) {
      res.status(500).send('システムエラーが発生しました。');
    }
  }
}

module.exports = ScrapingController;