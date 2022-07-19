const articleControl = require("../controllers/articles");
const router = require("express").Router();
const Articles = require("../model/articles");
// GET /articles
router.get("/", articleControl.fetchRandomData);
// GET  /articles/title/:articleTitle
router.get("/title/:articleTitle", articleControl.getArticleByTitle);
module.exports = router;
