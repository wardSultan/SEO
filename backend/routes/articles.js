const articlControl = require("../controllers/articles");
const router = require("express").Router();
const Articles = require("../model/articles");
// GET: /articles
router.get("/", articlControl.fetchRandomData);
module.exports = router;
