const express = require('express');
const bodyParser = require('body-parser');

const cronScheduleRouter = require('./src/interfaces/routes/cronScheduleRouter');
const scrapingRouter = require('./src/interfaces/routes/scrapingRouter');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/cron', cronScheduleRouter);
app.use('/scrape', scrapingRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});