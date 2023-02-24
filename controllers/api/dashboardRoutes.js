const router = require('express').Router();
const { Blogs } = require('../../models');
const needAuth = require('../../utils/auth');

router.post('/', needAuth, async (req, res) => {
    try {
        const newBlog = await Blogs.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(newBlog);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/update/:id', async (req, res) => {
    try {
        const updateBlog = await Blogs.update({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });
    } catch (err) {
        res.status(400).json(err);
    }
});



module.exports = router;