import { catchError } from './catchError';
import express = require('express');

import mergerGetController from '../controller/merger.get.controller';
export const router = express.Router();

router.get('/all', catchError(mergerGetController.all));

router.get('/source/:source', catchError(mergerGetController.source));

router.get(
  '/identifier/:identifier',
  catchError(mergerGetController.identifier)
);

router.get('/byDate/:dateMs', catchError(mergerGetController.dateMs));

export default router;
