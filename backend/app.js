const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const httpStatus = require("./util/httpStatus");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const usersRouter = require("./routes/auth");
const articlesRouter = require("./routes/articles");

const app = express();
const MONGODB_URI = "mongodb://localhost:27017/ward";
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(bodyParser.json());
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PUT,PATCH,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-type,Authorization");
  next();
});

app.use("/", usersRouter);
app.use("/articles", articlesRouter);

// error handler
app.use((error, req, res, next) => {
  console.log(error);
  const status = error.statusCode || httpStatus.INTERNAL_SERVER_ERROR;
  const message = error.message;
  const data = error.data;
  res.status(status).json({ message: message, data: data });
});
mongoose
  .connect(MONGODB_URI)
  .then((result) => {
    app.listen(8000);
  })
  .catch((err) => {
    console.log(err);
  });
module.exports = app;
