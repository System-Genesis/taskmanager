import express = require('express');
import splitterRoute from './splitter.route';
import recoveryPostRoute from './recovery.post.route';
import recoveryGetRoute from './recovery.get.route';
import pyRoute from './py.route';
export const router = express.Router();

router.use('/splitter', splitterRoute);
router.use('/recovery', recoveryPostRoute);
router.use('/get', recoveryGetRoute);
router.use('/py', pyRoute);

export default router;
