import express = require('express');
import { Request, Response } from 'express';
export const router = express.Router();

router.post('/splitter/All', (req: Request, res: Response) => {});
router.post('/splitter/Src/one', (req: Request, res: Response) => {});
router.post('/splitter/Src/all', (req: Request, res: Response) => {});
router.post('/splitter/One/allSource', (req: Request, res: Response) => {});

router.get('/recovery/get/source', (req: Request, res: Response) => {});
router.get('/recovery/one', (req: Request, res: Response) => {});
router.get('/recovery/byDate', (req: Request, res: Response) => {});
router.get('/recovery/get/all', (req: Request, res: Response) => {});

router.post('/recovery/run/all', (req: Request, res: Response) => {});
router.post('/recovery/source', (req: Request, res: Response) => {});
router.post('/recovery/one', (req: Request, res: Response) => {});
router.post('/recovery/byDate', (req: Request, res: Response) => {});

router.get('/py/source/:source/identifier/:identifier', (req: Request, res: Response) => {});
router.get('/py/source/:source/', (req: Request, res: Response) => {});
router.get('/py/identifier/:identifier', (req: Request, res: Response) => {});

export default router;
