const { sendEmail } = require("./handleEmail");

exports.verifyByEmail = async (email, name, FavoriteCategory) => {
  const subject = "SEO kisi";
  let msg = ` Hi ${name}, 
you have registered your information
from email: ${email}
With your Favorite Category: ${FavoriteCategory}`;
  try {
    await sendEmail(email, subject, `${msg}`);
    return code;
  } catch (err) {
    return err;
  }
};
