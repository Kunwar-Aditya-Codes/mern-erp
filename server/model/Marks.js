const mongoose = require("mongoose");

const marksSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },

  subjectMarks: [
    {
      subject: {
        type: String,
        required: true,
      },

      marks: {
        type: Number,
        required: true,
      },
    },
  ],
});

const Marks = mongoose.model("Marks", marksSchema);

module.exports = Marks;
