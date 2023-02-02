const mongoose = require('mongoose');

const marksSchema = new mongoose.Schema({
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true,
  },

  subjectMarks: [
    {
      subject: {
        type: String,
        default: 'Subject',
      },
      marks: {
        type: Number,
        default: 0,
      },
    },
  ],
});

const Marks = mongoose.model('Marks', marksSchema);

module.exports = Marks;
