const Teacher = require('../model/Teacher');
const Marks = require('../model/Marks');

// @route   GET /api/teacher
// @desc    Get logged in teacher
// @access  Private
exports.getTeacher = async (req, res) => {
  const email = req.email;
  const role = req.role;

  if (!email || !role || role !== 'teacher') {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const teacher = await Teacher.findOne({ tEmail: email })
    .select('-tPassword')
    .lean()
    .exec();

  if (!teacher) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  return res.json({ teacher });
};

// @route   GET /api/teacher/marks-list
// @desc    Get all students marks
// @access  Private
exports.getStudentMarks = async (req, res) => {
  const role = req.role;

  if (!role || role !== 'teacher') {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const marks = await Marks.find()
    .populate('studentId', 'sName sId')
    .lean()
    .exec();

  if (!marks) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  return res.json({ marks });
};

// @route   GET /api/teacher/marks-list/:id
// @desc    Get student marks by id
// @access  Private
exports.getStudentMarksById = async (req, res) => {
  const role = req.role;

  if (!role || role !== 'teacher') {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const studentId = req.params.id;

  if (!studentId) {
    return res.status(400).json({ message: 'No student id!' });
  }

  const marks = await Marks.findOne({ studentId }).lean().exec();

  if (!marks) {
    return res.status(400).json({ message: 'No marks with this student!' });
  }

  return res.json({ marks });
};

// @route   POST /api/teacher/marks-list/:id
// @desc    Add student marks
// @access  Private
exports.addStudentMarks = async (req, res) => {
  const role = req.role;

  if (!role || role !== 'teacher') {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const { subjectMarks } = req.body;
  const studentId = req.params.id;

  if (!subjectMarks || !studentId) {
    return res.status(400).json({ message: 'All fields required!' });
  }

  const marks = await Marks.findOne({ studentId }).lean().exec();

  if (marks) {
    await Marks.findOneAndUpdate(
      { studentId },
      {
        $set: {
          subjectMarks,
        },
      },
      { new: true }
    );

    return res.json({ message: 'Marks updated success!' });
  }

  await Marks.create({
    studentId,
    subjectMarks,
  });

  return res.json({ message: 'Marks added success!' });
};

// @route   PUT /api/teacher/marks-list/:id
// @desc    Update student marks by id
// @access  Private
exports.updateStudentMarksById = async (req, res) => {
  const role = req.role;

  if (!role || role !== 'teacher') {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const { subjectMarks } = req.body;

  if (!subjectMarks) {
    return res.status(203).json({ message: 'No marks to update!' });
  }

  const studentId = req.params.id;

  if (!studentId) {
    return res.status(400).json({ message: 'No student id!' });
  }

  const marks = await Marks.findOne({ studentId }).lean().exec();

  if (!marks) {
    return res.status(400).json({ message: 'No marks with this student!' });
  }

  await Marks.findOneAndUpdate(
    {
      studentId,
    },
    {
      $set: {
        subjectMarks,
      },
    },
    {
      new: true,
    }
  );

  return res.json({ message: 'Marks updated success!' });
};
