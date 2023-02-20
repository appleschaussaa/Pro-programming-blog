const router = require('express').Router();

const bloggerRoutes = require('./bloggerRoutes');
const blogsRoutes = require('./blogsRoutes');

router.use('/bloggers', bloggerRoutes);
router.use('/blogs', blogsRoutes);

module.exports = router;