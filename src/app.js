import 'dotenv/config';
import express from 'express';

import indexRouter from './api/components/router.js';
import globalErrorHandler from './api/middleware/errorHandler.js';
import ExpressError from './api/utils/expressError.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/v1', indexRouter);

app.all('*', (req, res, next) => {
  next(new ExpressError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App listening on ${port}`);
});
