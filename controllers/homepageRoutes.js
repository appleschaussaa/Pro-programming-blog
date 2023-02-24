const router = require('express').Router();
const { Blogs, Blogger } = require('../models');
const needAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const blogData = await Blogs.findAll({
            include: [
                {
                    model: Blogger,
                    attributes: ['name'],
                },
            ],
        });
        const blogs = blogData.map((blogs) => blogData.get({ plain: true }));
        res.render('homepage', {
            blogs,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router;