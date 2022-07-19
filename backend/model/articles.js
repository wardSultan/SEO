const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const articlesSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image_url: {
    type: String,
    required: true,
  },
  category: {
    type: String,

    required: true,
  },

  pubDate: {
    type: String,
    required: true,
  },
  keyWords: [{ type: String }],
});

module.exports = mongoose.model("articles", articlesSchema);
