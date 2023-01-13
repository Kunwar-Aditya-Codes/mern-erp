const router = require("express").Router();
const {
  createUser,
  deleteUser,
  getUsers,
} = require("../controller/adminController");

router.use((req, res, next) => {
  console.log("Admin route");
  next();
});

router.post("/createUser", createUser);

router.get("/getUsers", getUsers);

router.delete("/deleteUser", deleteUser);

module.exports = router;
