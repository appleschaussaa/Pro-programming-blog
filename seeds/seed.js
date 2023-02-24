const sequelize = require('../config/connection');
const { Blogger, Blogs } = require('../models');

const bloggerData = require('./bloggerData.json');
const blogData = require('./blogData.json');

const seedDB = async () => {
    await sequelize.sync({ force: true });
    const bloggers = await Blogger.bulkCreate(bloggerData, {
        individualHooks: true,
        returning: true,
    });

    for (const blogs of blogData) {
        await Blogs.create({
            ...blogs,
            user_id: bloggers[Math.floor(Math.random() * bloggers.length)].id,
        });
    }
    process.exit(0);
};

seedDB();