const Blogger = require('./Blogger');
const Blogs = require('./Blogs');

Blogger.hasMany(Blogs, {

});

Blogs.belongsTo(Blogger, {

});

module.exports = { Blogger, Blogs };