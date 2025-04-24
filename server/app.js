const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

const errorHandeller = require('./utils/errorHandeller');
const AppError = require('./utils/appError');
const infoRouter = require('./routes/infoRouter');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/api/info', infoRouter);

app.all(/(.*)/, (req, res, next) => {
  next(new AppError(`can't find the requested url - ${req.originalUrl}`, 404));
});

app.use(errorHandeller);
module.exports = app;
