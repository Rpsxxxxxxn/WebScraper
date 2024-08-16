const ScrapingController = require("../controllers/ScrapingController");
const scrapingController = new ScrapingController();
const router = require("express").Router();

router.get('/', (req, res) => scrapingController.index(req, res));
router.get('/target/:id', (req, res) => scrapingController.findTargets(req, res));
router.post('/add-target', (req, res) => scrapingController.addTarget(req, res));
router.post('/delete-target', (req, res) => scrapingController.deleteTarget(req, res));

module.exports = router;