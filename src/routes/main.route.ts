import express = require('express');
import { Request, Response } from 'express';
export const router = express.Router();

router.use('/splitterAll', (req: Request, res: Response) => {});
router.use('/splitterSrc', (req: Request, res: Response) => {});
router.use('/splitterOne', (req: Request, res: Response) => {});

router.use('/recovery/all', (req: Request, res: Response) => {});
router.use('/recovery/src', (req: Request, res: Response) => {});
router.use('/recovery/one', (req: Request, res: Response) => {});
router.use('/recovery/byDate', (req: Request, res: Response) => {});

router.use('/src/:src/identifier/:identifier', (req: Request, res: Response) => {});

export default router;
