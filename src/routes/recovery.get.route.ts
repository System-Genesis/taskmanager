import express = require('express');
import { Request, Response } from 'express';
import recoveryGetService from '../service/recoveryGet.service';
export const router = express.Router();

router.get('/all', async (_: Request, res: Response) => {
  const result = await recoveryGetService.getAll();

  res.send(result);
});

router.get('/source/:source', async (req: Request, res: Response) => {
  const result = await recoveryGetService.getSource(req.params.source);

  res.send(result);
});

router.get('/identifier/:identifier', async (req: Request, res: Response) => {
  const result = await recoveryGetService.getOne(req.params.identifier);

  res.send(result);
});

router.get('/byDate/:dateMs', async (req: Request, res: Response) => {
  const result = await recoveryGetService.getDate(req.params.dateMs);

  res.send(result);
});

export default router;
