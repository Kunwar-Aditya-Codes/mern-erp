const router = require("express").Router();
const {
  login,
  refreshToken,
  logout,
  loginStudent,
  loginTeacher,
} = require("../controller/authController");

router.use((req, res, next) => {
  console.log("Auth route");
  next();
});

router.route("/login").post(login);

router.route("/login-student").post(loginStudent);

router.route("/login-teacher").post(loginTeacher);

router.route("/refresh-token").get(refreshToken);

router.route("/logout").get(logout);

module.exports = router;
