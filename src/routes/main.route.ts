import express = require('express');
import splitterRoute from './splitter.route';
import mergerPostRoute from './merger.post.route';
import mergerGetRoute from './merger.get.route';
import dailyRoute from './daily.route';
// import pyRoute from './py.route';
export const router = express.Router();

router.use('/splitter', splitterRoute);
router.use('/recovery', mergerPostRoute);
router.use('/get', mergerGetRoute);
router.use('/daily', dailyRoute);
// router.use('/py', pyRoute);

export default router;
