import express = require('express');
import { Request, Response } from 'express';
import pyService from '../service/py.service';
export const router = express.Router();

router.get('/source/:source/', async (req: Request, res: Response) => {
  const result = await pyService.source(req.params.source);

  return res.send(result);
});

router.get('/identifier/:identifier', async (req: Request, res: Response) => {
  const result = await pyService.byIdentifier(req.params.identifier);

  return res.send(result);
});

router.get(
  '/source/:source/identifier/:identifier',
  async (req: Request, res: Response) => {
    const { source, identifier } = req.params;

    const result = await pyService.fromSource(source, identifier);

    return res.send(result);
  }
);

export default router;
