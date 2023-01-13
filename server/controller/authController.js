const adminEmail = process.env.ADMIN_EMAIL;
const adminPassword = process.env.ADMIN_PASSWORD;
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Please enter all fields" });
  }

  if (email === adminEmail && password === adminPassword) {
    const accessToken = jwt.sign({ email }, process.env.ACCESS_TOKEN, {
      expiresIn: "15m",
    });

    const refreshToken = jwt.sign(
      {
        email,
        role: "admin",
      },
      process.env.REFRESH_TOKEN,
      {
        expiresIn: "7d",
      }
    );

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      sameSite: "strict",
      secure: true,
    });

    return res.json({ accessToken });
  }

  //TODO: If the user is not an admin & is a teacher or student
};

exports.refreshToken = async (req, res) => {};

exports.logout = async (req, res) => {};
