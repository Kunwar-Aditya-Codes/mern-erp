const router = require('express').Router();
const {
  getStudent,
  getStudentMarks,
} = require('../controller/studentController');
const verifyJwt = require('../middleware/verifyJwt');

router.use((req, res, next) => {
  console.log('Student Routes');
  next();
});

router.use(verifyJwt);

router.route('/').get(getStudent);

router.route('/marks').get(getStudentMarks);

module.exports = router;
