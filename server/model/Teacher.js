const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema({
  tName: {
    type: String,
    required: true,
  },

  tEmail: {
    type: String,
    required: true,
  },

  tPassword: {
    type: String,
    required: true,
  },

  tId: {
    type: String,
    required: true,
  },

  tImage: {
    type: String,
    default: "",
  },

  role: {
    type: String,
    default: "teacher",
  },
});

module.exports = mongoose.model("Teacher", teacherSchema);
