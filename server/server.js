require('dotenv').config();
require('express-async-errors');
const express = require('express');
const PORT = process.env.PORT || 5000;
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const app = express();

const mongoConnect = require('./utils/mongoConnect');
const corsConfig = require('./utils/corsConfig');

mongoConnect();

app.use(express.json());
app.use(cors(corsConfig));
app.use(cookieParser());

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));
app.use('/api/teacher', require('./routes/teacherRoutes'));
app.use('/api/student', require('./routes/studentRoutes'));

mongoose.connection.once('open', () => {
  console.log('Connected to db!');
  app.listen(PORT, () => {
    console.log(`Server started on PORT:${PORT}`);
  });
});

mongoose.connection.on('error', (err) => {
  console.log(err);
});
