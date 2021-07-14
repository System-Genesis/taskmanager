import express = require('express');
import { Request, Response } from 'express';
import splitterRoute from './splitter.route';
import recoveryPostRoute from './recovery.post.route';
import recoveryGetRoute from './recovery.get.route';
export const router = express.Router();

router.use('/splitter', splitterRoute);
router.use('/recovery', recoveryPostRoute);
router.use('/get', recoveryGetRoute);

router.get(
  '/py/source/:source/identifier/:identifier',
  (req: Request, res: Response) => {}
);
router.get('/py/source/:source/', (req: Request, res: Response) => {});
router.get('/py/identifier/:identifier', (req: Request, res: Response) => {});

export default router;
