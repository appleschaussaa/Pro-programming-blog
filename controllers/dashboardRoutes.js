const router = require('express').Router();
const { Blogs, Blogger } = require('../models');
const needAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const currentBlogData = await Blogs.findAll({
            where: {
                user_id: req.session.user_id
            },
            attributes: [
                'id',
                'title',
                'text',
                // 'created_at'
            ],
            include: [
                {
                    model: Blogger,
                    attributes: ['blogger']
                }
            ]
        });
        const allBlogs = currentBlogData.map((blogs =>
            blogs.get({ plain: true })
        ));
        res.render('dashboard', {
            allBlogs,
            // loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

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