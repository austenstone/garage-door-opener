#!/usr/bin/env node
import express from 'express';
import path from 'path';
import winston from 'winston';
import expressWinston from 'express-winston';
import garageRouter from './garage';

const app = express();
const port = 3000;

app.use(expressWinston.logger({
  transports: [
    new winston.transports.File({
      filename: 'express.log'
    })
  ],
  format: winston.format.simple(),
  meta: true,
  expressFormat: true,
  colorize: false
}));

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

app.use('/garage', garageRouter);

