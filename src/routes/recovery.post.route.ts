import express = require('express');
import { Request, Response } from 'express';
import recoveryPostService from '../service/recoveryPost.service';
export const router = express.Router();

router.post('/all', async (_: Request, res: Response) => {
  const result = await recoveryPostService.runAll();

  res.send(result);
});

router.post('/source/:source', async (req: Request, res: Response) => {
  const result = await recoveryPostService.runSource(req.params.source);

  res.send(result);
});

router.post('/identifier/:identifier', async (req: Request, res: Response) => {
  const result = await recoveryPostService.runOne(req.params.identifier);

  res.send(result);
});

router.post('/byDate/:dateMs', async (req: Request, res: Response) => {
  const result = await recoveryPostService.runDate(req.params.dateMs);

  res.send(result);
});

export default router;
