const { Model, Datatypes } = require('sequelize');
const sequelize = require('../config/connection');

class Blogs extends Model {}

Blogs.init(
    {
        id: {

        },
        title: {

        },
        text: {

        },
        tag: {

        }
    },
    {
        sequelize,
        timestamp,
        freezeTableName,
        underscored,
        modelName: "blogs",
    }
);

module.exports = Blogs;