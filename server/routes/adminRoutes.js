const router = require('express').Router();
const {
  createUser,
  deleteUser,
  getStudents,
  getTeachers,
} = require('../controller/adminController');
const verifyJwt = require('../middleware/verifyJwt');

router.use((req, res, next) => {
  console.log('Admin route');
  next();
});

router.use(verifyJwt);

router.post('/createUser', createUser);

router.get('/getUsers/students', getStudents);

router.get('/getUsers/teachers', getTeachers);

router.delete('/deleteUser', deleteUser);

module.exports = router;
