const router = require("express").Router();
const { getTeacher } = require("../controller/teacherController");
const verifyJwt = require("../middleware/verifyJwt");

router.use((req, res, next) => {
  console.log("Teacher route");
  next();
});

router.use(verifyJwt);

router.route("/").get(getTeacher);

module.exports = router;
