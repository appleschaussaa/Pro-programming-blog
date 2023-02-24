const { Model, DataTypes } = require('sequelize');
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
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: [10],
            },
        },
    },
    {
        hooks: {
            beforeCreate: async (createdUerData) => {
                createdUerData.password = await bcrypt.hash(createdUerData.password, 10);
                return createdUerData;
            },
            beforeUpdate: async (updateUserData) => {
                updateUserData.password = await bcrypt.hash(updateUserData.password, 10);
                return updateUserData;
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "blogger",
    }
);

module.exports = Blogger;