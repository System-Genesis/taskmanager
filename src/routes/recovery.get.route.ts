import express = require('express');
import { Request, Response } from 'express';
import recoveryGetService from '../service/recoveryGet.service';
export const router = express.Router();

router.get('/source/:source', (req: Request, res: Response) => {
  const result = recoveryGetService.getSource(req.params.source);

  res.send(result);
});

router.get('/identifier/:identifier', (req: Request, res: Response) => {
  const result = recoveryGetService.getOne(req.params.identifier);

  res.send(result);
});

router.get('/byDate/:dateMs', (req: Request, res: Response) => {
  const result = recoveryGetService.getDate(req.params.dateMs);

  res.send(result);
});

router.get('/all', (_: Request, res: Response) => {
  const result = recoveryGetService.getAll();

  res.send(result);
});

export default router;
