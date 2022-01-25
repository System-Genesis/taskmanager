import { catchError } from './catchError';
import express = require('express');
import splitterController from '../controller/splitter.controller';
export const router = express.Router();

router.post('/all', catchError(splitterController.all));
router.post('/source/:source', catchError(splitterController.source));
router.post('/identifier/:id/source/:source', catchError(splitterController.oneFromOneSource));
router.post('/identifier/:identifier', catchError(splitterController.oneFromAllSource));
router.post('/digitalIdentity/:digitalIdentity', catchError(splitterController.diFromSourceAll));
router.post('/digitalIdentity/:digitalIdentity/source/:source', catchError(splitterController.diFromOneSource));

router.get('/digitalIdentity/:digitalIdentity', catchError(splitterController.diFromSourceAll));
router.get('/digitalIdentity/:digitalIdentity/source/:source', catchError(splitterController.diFromOneSource));
router.get('/all', catchError(splitterController.all));
router.get('/source/:source', catchError(splitterController.source));
router.get('/identifier/:id/source/:source', catchError(splitterController.oneFromOneSource));
router.get('/identifier/:identifier', catchError(splitterController.oneFromAllSource));

export default router;
