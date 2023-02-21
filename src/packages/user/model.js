const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => sequelize.define('User', {
    id: {
        type: DataTypes.INTERGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
});