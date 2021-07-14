import express = require('express');
import { Request, Response } from 'express';
export const router = express.Router();

router.post('/recovery/run/all', (req: Request, res: Response) => {});
router.post('/recovery/source', (req: Request, res: Response) => {});
router.post('/recovery/one', (req: Request, res: Response) => {});
router.post('/recovery/byDate', (req: Request, res: Response) => {});

export default router;
