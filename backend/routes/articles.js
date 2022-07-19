const articleControl = require("../controllers/articles");
const router = require("express").Router();
const Articles = require("../model/articles");
// GET /articles
router.get("/", articleControl.fetchRandomData);
// GET  /articles/title/:articleTitle
router.get("/title/:articleTitle", articleControl.getArticleByTitle);
//Get /articles/:keyWord
router.get("/:keyWord", articleControl.getArticleByKeyWord);
//Get /articles/category/:categoryName
router.get("/category/:categoryName", articleControl.getArticleByCategory);
module.exports = router;
