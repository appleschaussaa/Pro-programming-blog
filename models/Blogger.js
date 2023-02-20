const { Model, Datatypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Blogger extends Model {
    checkPassword(loginPw) {
        return bcrypt.compareSync(loginPw, this.password);
    }
}

Blogger.init(
    {
        id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {

        },
        email: {

        },
        password: {

        },
    },
    {
        hooks: {
            beforeCreate:
            beforeUpdate
        },
        sequelize,
        timestamp,
        freezeTableName,
        underscored,
        modelName: "blogger",
    }
);

module.exports = Blogger;