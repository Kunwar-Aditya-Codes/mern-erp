const Student = require("../model/Student");
const Teacher = require("../model/Teacher");
const bcrypt = require("bcrypt");

exports.createUser = async (req, res) => {
  const { name, email, password, role, image, uId } = req.body;

  if (!name || !email || !password || !role || !uId) {
    return res.status(400).json({ message: "Please enter all fields" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

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

    const savedTeacher = await newTeacher.save();

    return res.json({ savedTeacher });
  }

  return res.status(400).json({ message: "Error creating user" });
};

exports.getUsers = async (req, res) => {};

exports.deleteUser = async (req, res) => {};
