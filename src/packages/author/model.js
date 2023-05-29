import { dbConfig } from "../../db/db";

const { DataTypes } = require("sequelize");

const Author = dbConfig.define('Buyer', {
    AuthorId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    firstname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    personalId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false, 
    },
    dateOfBirth: {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
})

export default Auhtor;
