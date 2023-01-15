const Student = require("../model/Student");
const Marks = require("../model/Marks");

// @route   GET /api/student
// @desc    Get logged in student
// @access  Private
exports.getStudent = async (req, res) => {
  const email = req.email;
  const role = req.role;

  if (!email || !role || role !== "student") {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const student = await Student.findOne({ sEmail: email })
    .select("-sPassword")
    .lean()
    .exec();

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.status(200).json({ student });
};

// @route   GET /api/student/:id
// @desc    Get student marks
// @access  Private
exports.getStudentMarks = async (req, res) => {
  const role = req.role;

  if (!role || role !== "student") {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const studentId = req.params.id;

  const marks = await Marks.findOne({ studentId }).lean().exec();

  if (!marks) {
    return res.status(404).json({ message: "Marks not found" });
  }

  res.status(200).json({ marks });
};
