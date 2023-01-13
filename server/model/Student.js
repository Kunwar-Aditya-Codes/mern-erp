const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  sName: {
    type: String,
    required: true,
  },

  sEmail: {
    type: String,
    required: true,
  },

  sPassword: {
    type: String,
    required: true,
  },

  sId: {
    type: String,
    required: true,
  },

  sImage: {
    type: String,
    default: "",
  },

  sMarks: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Marks",
  },

  role: {
    type: String,
    default: "student",
  },
});

module.exports = mongoose.model("Student", studentSchema);
