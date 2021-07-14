import express = require('express');
import { Request, Response } from 'express';
import recoveryPostService from '../service/recoveryPost.service';
export const router = express.Router();

router.post('/all', (_: Request, res: Response) => {
  const result = recoveryPostService.runAll();

  res.send(result);
});

router.post('/source/:source', (req: Request, res: Response) => {
  const result = recoveryPostService.runSource(req.params.source);

  res.send(result);
});

router.post('/identifier/:identifier', (req: Request, res: Response) => {
  const result = recoveryPostService.runOne(req.params.identifier);

  res.send(result);
});

router.post('/byDate/:dateMs', (req: Request, res: Response) => {
  const result = recoveryPostService.runDate(req.params.dateMs);

  res.send(result);
});

export default router;
