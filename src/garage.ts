import express from 'express';
import { openGarageDoor, closeGarageDoor } from './gpio';

const router = express.Router();

router.post('/', (_, res) => {
  res.send('Garage door controller');
});

router.post('/open', (_, res) => {
  openGarageDoor();
  res.send('Opening garage door');
});

router.post('/close', (_, res) => {
  closeGarageDoor();
  res.send('Closing garage door');
});

export default router;