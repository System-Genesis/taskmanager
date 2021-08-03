import { catchError } from './catchError';
import express = require('express');
import mergerPostController from '../controller/merger.post.controller';
export const router = express.Router();

router.post('/all', catchError(mergerPostController.all));

router.post('/source/:source', catchError(mergerPostController.source));

router.post(
  '/identifier/:identifier',
  catchError(mergerPostController.identifier)
);

router.post('/byDate/:dateMs', catchError(mergerPostController.dateMs));

export default router;
