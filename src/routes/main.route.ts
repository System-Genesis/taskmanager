import splitterRoute from './splitter.route';
import mergerPostRoute from './merger.post.route';
import mergerGetRoute from './merger.get.route';
import dailyRoute from './daily.route';

import express = require('express');

const router = express.Router();

router.use('/splitter', splitterRoute);
router.use('/recovery', mergerPostRoute);
router.use('/mergedUsers', mergerGetRoute);
router.use('/daily', dailyRoute);

export default router;
