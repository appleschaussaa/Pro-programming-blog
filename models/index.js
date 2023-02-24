const Blogger = require('./Blogger');
const Blogs = require('./Blogs');

Blogger.hasMany(Blogs, {
    foreignKey:'user_id',
});

Blogs.belongsTo(Blogger, {
    foreignKey: 'user_id',
});

module.exports = { Blogger, Blogs };