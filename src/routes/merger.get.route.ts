import { catchError } from './catchError';
import express = require('express');

import mergerGetController from '../controller/merger.get.controller';
export const router = express.Router();

router.get('/all', catchError(mergerGetController.all));

router.get('/source/:source', catchError(mergerGetController.source));

router.get('/identifier/:identifier', catchError(mergerGetController.identifier));

router.get('/byDate/:dateMs', catchError(mergerGetController.dateMs));

router.get('/source/:source/digitalIdentity/:digitalIdentityUniqueId', catchError(mergerGetController.diBySource));

export default router;
