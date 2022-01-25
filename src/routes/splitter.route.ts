import { catchError } from './catchError';
import express = require('express');
import splitterController from '../controller/splitter.controller';
export const router = express.Router();

router.post('/all', catchError(splitterController.all));
router.post('/source/:source', catchError(splitterController.source));
router.post('/identifier/:id/source/:source', catchError(splitterController.oeFromOneSource));
router.post('/identifier/:identifier', catchError(splitterController.oneFromAllSource));
router.post('/digitalIdentity/:digitalIdentity', catchError(splitterController.diFromSource));

router.get('/digitalIdentity/:digitalIdentity', catchError(splitterController.diFromSource));
router.get('/all', catchError(splitterController.all));
router.get('/source/:source', catchError(splitterController.source));
router.get('/identifier/:id/source/:source', catchError(splitterController.oeFromOneSource));
router.get('/identifier/:identifier', catchError(splitterController.oneFromAllSource));

export default router;
