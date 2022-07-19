const Articles = require("../model/articles");
const httpStatus = require("../util/httpStatus");
const axios = require("axios");

exports.fetchRandomData = async (req, res, next) => {
  //At each fetch of the articles, old articles are deleted, so that they do not become overwrite
  Articles.find()
    .then((articles) => {
      if (articles) {
        articles.forEach((article) => {
          Articles.findById(article.id).then((result) => {
            if (!result) {
              return next(new Error("Article not found."));
            }
            return Articles.deleteOne({ _id: article.id });
          });
        });
      }
    })
    .catch((err) => {
      res
        .status(httpStatus.INTERNAL_SERVER_ERROR)
        .json({ message: "Deleting product failed" });
    });

  //fetch articles from a free API , and store it in the database..
  const pages = ["1", "2", "3", "4", "5"];
  for (let page of pages) {
    await axios
      .get(
        `https://newsdata.io/api/1/news?page=${page}&country=us&apikey=pub_922310613a9cc2ab1adb7856b1cf7a18ea4b`
      )
      .then((resp) => {
        if (!resp) {
          const error = new Error("no article found");
          error.statusCode = httpStatus.NOT_FOUND;
          throw error;
        }
        resp.data.results.forEach((element) => {
          if (
            element.title != null &&
            element.description != null &&
            element.image_url != null &&
            element.category != null &&
            element.pubDate != null
          ) {
            const keyWords = element.title.split(" ");
            const article = new Articles({
              title: element.title,
              description: element.description,
              image_url: element.image_url,
              category: element.category[0],
              pubDate: element.pubDate,
              keyWords: keyWords,
            });
            article.save();
          }
        });
      })
      .catch((err) => {
        if (!err.statusCode) {
          err.statusCode = httpStatus.INTERNAL_SERVER_ERROR;
        }
        next(err);
      });
  }
  // response with articles which fetched
  Articles.find()
    .then((articles) => {
      if (!articles) {
        const error = new Error(`No Article found `);
        error.statusCode = httpStatus.NOT_FOUND;
        throw error;
      }
      res.status(httpStatus.OK).json(articles);
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = httpStatus.INTERNAL_SERVER_ERROR;
      }
      next(err);
    });
};

exports.getArticleByTitle = (req, res, next) => {
  const articleTitle = req.params.articleTitle;
  Articles.find({ title: articleTitle })
    .then((article) => {
      if (!article || article == "") {
        const error = new Error(`No Article found with ${articleTitle} title`);
        error.statusCode = httpStatus.NOT_FOUND;
        throw error;
      }
      res.status(httpStatus.OK).json({ article: article });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = httpStatus.NOT_FOUND;
      }
      next(err);
    });
};

exports.getArticleByKeyWord = (req, res, next) => {
  const keyWords = req.params.keyWord;
  const keyWordsSplit = keyWords.split(" ");
  for (let keyWordSplit of keyWordsSplit) {
    Articles.find({ keyWords: keyWordSplit })
      .then((article) => {
        if (!article || article == "") {
          const error = new Error(
            `No Article found with ${keyWordsSplit} Key Word`
          );
          error.statusCode = httpStatus.NOT_FOUND;
          throw error;
        }
        res.status(httpStatus.OK).json({ article: article });
      })
      .catch((err) => {
        if (!err.statusCode) {
          err.statusCode = httpStatus.INTERNAL_SERVER_ERROR;
        }
        next(err);
      });
  }
};

exports.getArticleByCategory = (req, res, next) => {
  const categoryName = req.params.categoryName;
  Articles.find({ category: categoryName })
    .then((article) => {
      if (!article || article == "") {
        const error = new Error("no article found");
        error.statusCode = httpStatus.NOT_FOUND;
        throw error;
      }
      res.status(httpStatus.OK).json({ article: article });
    })
    .catch((err) => {
      if (!err.statusCode) {
        err.statusCode = httpStatus.INTERNAL_SERVER_ERROR;
      }
      next(err);
    });
};
