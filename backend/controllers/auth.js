const { verifyByEmail } = require("../services/verifyByEmail");
const { validationResult } = require("express-validator");
const User = require("../model/user");
const httpStatus = require("../util/httpStatus");

exports.signUp = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error = new Error("Validation failed");
      error.statusCode = httpStatus.VALIDATION_ERROR;
      error.data = errors.array();
      throw error;
    }
    const { email, name, FavoriteCategory } = req.body;
    const msg = await verifyByEmail(email, name, FavoriteCategory);
    const user = new User({
      email: email,
      name: name,
      FavoriteCategory: FavoriteCategory,
    });
    user.save();
    res.status(200).json({ message: `send msg seccessful to email ${email}` });
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};
