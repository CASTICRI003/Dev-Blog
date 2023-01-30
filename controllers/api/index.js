const router = require('express').Router();
const userRoutes = require('./userRoutes');
const dashRoutes = require('./dashboardRoutes');
const newRoutes = require('./newPostRoutes');

router.use('/users', userRoutes);
router.use('/posts', dashRoutes);
router.use('/new', newRoutes);

module.exports = router;