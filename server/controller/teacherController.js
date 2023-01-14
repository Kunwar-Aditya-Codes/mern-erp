const Teacher = require("../model/Teacher");

// @route   GET /api/teacher
// @desc    Get logged in teacher
// @access  Private
exports.getTeacher = async (req, res) => {
  const email = req.email;
  const role = req.role;

  if (!email || !role || role !== "teacher") {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const teacher = await Teacher.findOne({ tEmail: email })
    .select("-tPassword")
    .lean()
    .exec();

  if (!teacher) {
    return res.status(400).json({ message: "Invalid credentials" });
  }

  return res.json({ teacher });
};
