class ScrapingTarget {
  constructor(id, websiteUrl, targetTag, type) {
    this.id = id;
    this.websiteUrl = websiteUrl;
    this.targetTag = targetTag;
    this.type = type;
  }
}

module.exports = ScrapingTarget;