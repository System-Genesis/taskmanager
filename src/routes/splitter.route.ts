import express = require('express');
import { Request, Response } from 'express';
import splitterService from '../service/splitter.service';
export const router = express.Router();

router.post('/all', async (_: Request, res: Response) => {
  const result = await splitterService.runAllSource();

  res.send(result);
});

router.post('/source/:source', async (req: Request, res: Response) => {
  const result = await splitterService.runOneSource(req.params.source);

  res.send(result);
});

router.post(
  '/identifier/:id/source/:source',
  async (req: Request, res: Response) => {
    const { id, source } = req.params;

    const result = await splitterService.runOneFromOneSource(id, source);

    res.send(result);
  }
);

router.post('/identifier/:identifier', async (req: Request, res: Response) => {
  const identifier = req.params.identifier;

  const result = await splitterService.runOneFromAllSource(identifier);

  res.send(result);
});

export default router;
