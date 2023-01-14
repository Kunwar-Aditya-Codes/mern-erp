const Student = require("../model/Student");
const Teacher = require("../model/Teacher");
const bcrypt = require("bcrypt");

// @route   POST /api/admin/createUser
// @desc    Create a new user
// @access  Private - Admin
exports.createUser = async (req, res) => {
  const { name, email, password, role, image, uId } = req.body;

  if (!name || !email || !password || !role || !uId) {
    return res.status(400).json({ message: "Please enter all fields" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  // Create a new student *****************************************************
  if (role === "student") {
    const student = await Student.findOne({ sId: uId });

    if (student) {
      return res.status(400).json({ message: "Student already exists" });
    }

    const newStudent = new Student({
      sName: name,
      sEmail: email,
      sPassword: hashedPassword,
      sId: uId,
      sImage: image,
    });

    await newStudent.save();

    return res.json({ message: "Student created!" });
  }

  // Create a new teacher *****************************************************
  if (role === "teacher") {
    const teacher = await Teacher.findOne({ tId: uId });

    if (teacher) {
      return res.status(400).json({ message: "Teacher already exists" });
    }

    const newTeacher = new Teacher({
      tName: name,
      tEmail: email,
      tPassword: hashedPassword,
      tId: uId,
      tImage: image,
    });

    await newTeacher.save();

    return res.json({ message: "Teacher created!" });
  }

  return res.status(400).json({ message: "Error creating user" });
};

// @route   GET /api/admin/getUsers
// @desc    Get all users
// @access  Private - Admin
exports.getUsers = async (req, res) => {
  console.log(req.role);

  const students = await Student.find().select("-sPassword");
  const teachers = await Teacher.find().select("-tPassword");

  return res.json({ students, teachers });
};

// @route   POST /api/admin/deleteUser
// @desc    Delete a user
// @access  Private - Admin
exports.deleteUser = async (req, res) => {
  const { id, role } = req.body;

  if (!id || !role) {
    return res.status(400).json({ message: "Please enter all fields" });
  }

  if (role === "student") {
    await Student.findByIdAndDelete(id);
    return res.json({ message: "Student deleted!" });
  }

  if (role === "teacher") {
    await Teacher.findByIdAndDelete(id);
    return res.json({ message: "Teacher deleted!" });
  }

  return res.status(400).json({ message: "Error deleting user" });
};
