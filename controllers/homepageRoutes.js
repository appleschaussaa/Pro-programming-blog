const router = require('express').Router();
const { Blogs, Blogger } = require('../models');
const needAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const bloggerData = await Blogger.findAll({
            attributes: {
                exclude: ['password']
            },
            order: [
                ['name', 'ASC']
            ],
        });
        const bloggers = bloggerData.map((blog) => blog.get({ plain: true }));
        res.render('homepage', {
            bloggers,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router;