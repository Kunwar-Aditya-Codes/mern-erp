const router = require('express').Router();
const {
  createUser,
  deleteUser,
  getUsers,
} = require('../controller/adminController');
const verifyJwt = require('../middleware/verifyJwt');

router.use((req, res, next) => {
  console.log('Admin route');
  next();
});

router.use(verifyJwt);

router.post('/createUser', createUser);

router.get('/getUsers/:role', getUsers);

router.delete('/deleteUser', deleteUser);

module.exports = router;
