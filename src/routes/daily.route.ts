import { DailyRun } from './../util/DailyRun';
import express = require('express');
import { Request, Response } from 'express';
export const router = express.Router();

const format = (number: number) => number.toString().padStart(2, '0');

router.post('/hour/:hour/minute/:minute', async (req: Request, res: Response) => {
  try {
    const hour = parseInt(req.params.hour);
    const minute = parseInt(req.params.minute);

    if (hour > 23 || hour < 0) {
      throw new Error('Hour must be between 0 and 23');
    }

    if (minute > 59 || minute < 0) {
      throw new Error('Minute must be between 0 and 59');
    }

    DailyRun.getInstance().changeRunTime(hour, minute);

    res.send(`Daily run scheduled to ${format(hour)}:${format(minute)}`);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
});

export default router;
