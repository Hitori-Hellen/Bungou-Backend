const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {sequelize.define('User', {
    UserId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    Username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Useremail: {
        type: DataTypes.STRING,
        allowNull: false
    },
});
models.User.belongsToMany(models.User, {
    through: models.UserRole,
    foreignKey: 'UserId',
    otherKey: 'RoleId'
})
models.User.hasMany(models.Review, {
    foreignKey: 'ReviewId'
})
models.User.hasMany(models.Order, {
    foreignKey: 'OrderId'
})
};