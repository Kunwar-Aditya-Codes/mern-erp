const adminEmail = process.env.ADMIN_EMAIL;
const adminPassword = process.env.ADMIN_PASSWORD;
const jwt = require('jsonwebtoken');
const Student = require('../model/Student');
const Teacher = require('../model/Teacher');
const bcrypt = require('bcrypt');

// @route   POST /api/auth/login
// @desc    Login admin
// @access  Public
exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Please enter all fields' });
  }

  if (email === adminEmail && password === adminPassword) {
    const accessToken = jwt.sign(
      {
        email,
        role: 'admin',
      },
      process.env.ACCESS_TOKEN,
      {
        expiresIn: '1d', // 15 min
      }
    );

    const refreshToken = jwt.sign(
      {
        email,
        role: 'admin',
      },
      process.env.REFRESH_TOKEN,
      {
        expiresIn: '7d',
      }
    );

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      sameSite: 'strict',
      secure: true,
    });

    return res.json({ accessToken });
  }

  return res.status(400).json({ message: 'Invalid credentials' });
};

// @route   POST /api/auth/login-student
// @desc    Login student
// @access  Public
exports.loginStudent = async (req, res) => {
  const { sId, sPassword } = req.body;

  if (!sId || !sPassword) {
    return res.status(400).json({ message: 'Please enter all fields' });
  }

  const student = await Student.findOne({ sId });

  if (!student) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const isMatch = await bcrypt.compare(sPassword, student.sPassword);

  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const accessToken = jwt.sign(
    { email: student.sEmail, role: student.role, _id: student._id },
    process.env.ACCESS_TOKEN,
    { expiresIn: '1d' } // 15m
  );

  const refreshToken = jwt.sign(
    { email: student.sEmail, role: student.role },
    process.env.REFRESH_TOKEN,
    {
      expiresIn: '7d',
    }
  );

  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    sameSite: 'strict',
    secure: true,
  });

  return res.json({ accessToken });
};

// @route   POST /api/auth/login-teacher
// @desc    Login teacher
// @access  Public
exports.loginTeacher = async (req, res) => {
  const { tId, tPassword } = req.body;

  if (!tId || !tPassword) {
    return res.status(400).json({ message: 'Please enter all fields' });
  }

  const teacher = await Teacher.findOne({ tId });

  if (!teacher) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const isMatch = await bcrypt.compare(tPassword, teacher.tPassword);

  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid credentials' });
  }

  const accessToken = jwt.sign(
    { email: teacher.tEmail, role: teacher.role, _id: teacher._id },
    process.env.ACCESS_TOKEN,
    { expiresIn: '1d' } // 15m
  );

  const refreshToken = jwt.sign(
    { email: teacher.tEmail, role: teacher.role },
    process.env.REFRESH_TOKEN,
    {
      expiresIn: '7d',
    }
  );

  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    sameSite: 'strict',
    secure: true,
  });

  return res.json({ accessToken });
};

// @route   POST /api/auth/refresh-token
// @desc    Refresh token
// @access  Private
exports.refreshToken = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN);

  if (!decoded) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const role = decoded.role;

  const accessToken = jwt.sign(
    {
      _id: decoded._id,
      email: decoded.email,
      role,
    },
    process.env.ACCESS_TOKEN,
    {
      expiresIn: '15m',
    }
  );

  return res.json({ accessToken });
};

// @route   POST /api/auth/logout
// @desc    Logout
// @access  Private
exports.logout = async (req, res) => {
  const refreshToken = req.cookies.refreshToken;

  if (!refreshToken) {
    return res.status(203).json({ message: 'No content' });
  }

  res.clearCookie('refreshToken');

  return res.status(200).json({ message: 'Logout!' });
};
