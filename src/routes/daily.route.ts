import { DailyRun } from './../util/DailyRun';
import express = require('express');
import { Request, Response } from 'express';
import Joi = require('joi');
import { dailyReq } from '../util/types';
export const router = express.Router();

router.post('', async (req: Request, res: Response) => {
  try {
    const body = req.body as dailyReq;

    const schema = Joi.object({
      hour: Joi.alternatives().try(Joi.array().items(Joi.number().min(0).max(23)), Joi.number().min(0).max(23)),
      minute: Joi.alternatives().try(Joi.array().items(Joi.number().min(0).max(59)), Joi.number().min(0).max(59)),
      date: Joi.alternatives().try(Joi.array().items(Joi.number().min(1).max(31)), Joi.number().min(1).max(31)),
      second: Joi.alternatives().try(Joi.array().items(Joi.number().min(0).max(59)), Joi.number().min(0).max(59)),
      month: Joi.alternatives().try(Joi.array().items(Joi.number().min(0).max(11)), Joi.number().min(0).max(11)),
      dayOfWeek: Joi.alternatives().try(Joi.array().items(Joi.number().min(0).max(6)), Joi.number().min(0).max(6)),
    });

    const { error, value } = schema.validate(body);

    if (error) throw error;

    DailyRun.getInstance().changeRunTime(value as dailyReq);

    res.send(`Daily run scheduled to ${JSON.stringify(body)}`);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
});

export default router;
