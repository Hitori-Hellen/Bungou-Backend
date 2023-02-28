const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => sequelize.define('Buyer', {
    BuyerId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    Firstname: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    Lastname: {
        type: DataTypes.STRING,
        allowNull: true,
    },
})