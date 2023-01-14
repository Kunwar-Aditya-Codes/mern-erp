const jwt = require("jsonwebtoken");

const verifyJwt = (req, res, next) => {
  const token = req.headers?.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      message: "Auth failed",
    });
  }

  const decoded = jwt.verify(token, process.env.ACCESS_TOKEN);

  req.email = decoded.email;
  req.role = decoded.role;

  next();
};

module.exports = verifyJwt;
