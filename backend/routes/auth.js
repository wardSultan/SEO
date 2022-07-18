const signup = require("../controllers/auth");
const { body } = require("express-validator");
const router = require("express").Router();
const User = require("../model/user");

// GET: /signup
router.post(
  "/signup",
  [
    body("email")
      .isEmail()
      .withMessage("pleas enter a valid email")
      .custom((value, { req }) => {
        return User.findOne({ email: value }).then((userDoc) => {
          if (userDoc) {
            return Promise.reject("E-Mail address already exists!");
          }
        });
      }),
    body("name").trim().isLength({ min: 2 }).not().isEmpty(),
    body("FavoriteCategory").trim().isLength({ min: 2 }).not().isEmpty(),
  ],
  signup.signUp
);

module.exports = router;
