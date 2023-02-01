const mongoose = require('mongoose');

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
    default:
      'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png',
  },

  sMarks: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Marks',
  },

  role: {
    type: String,
    default: 'student',
  },
});

module.exports = mongoose.model('Student', studentSchema);
