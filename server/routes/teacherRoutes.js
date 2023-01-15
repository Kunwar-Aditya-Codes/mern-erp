const router = require("express").Router();
const {
  getTeacher,
  getStudentMarks,
  addStudentMarks,
} = require("../controller/teacherController");
const verifyJwt = require("../middleware/verifyJwt");

router.use((req, res, next) => {
  console.log("Teacher route");
  next();
});

router.use(verifyJwt);

router.route("/").get(getTeacher);

router.route("/marks-list").get(getStudentMarks);

router.route("/marks-list/:id").post(addStudentMarks);

module.exports = router;
