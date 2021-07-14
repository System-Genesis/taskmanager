import express = require('express');
import { Request, Response } from 'express';
export const router = express.Router();

router.post('/All', (req: Request, res: Response) => {});
router.post('/Src/one', (req: Request, res: Response) => {});
router.post('/Src/all', (req: Request, res: Response) => {});
router.post('/One/allSource', (req: Request, res: Response) => {});

export default router;
