import express from 'express';
import { openGarageDoor } from './gpio';

const router = express.Router();

router.post('/open', async (_, res) => {
  await openGarageDoor();
  res.status(200);
});

export default router;