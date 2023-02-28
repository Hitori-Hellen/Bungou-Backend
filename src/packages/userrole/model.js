const {Model, DataTypes} = require('sequelize');
const { User } = require('../../models/model');

const UserRole = sequelize.define('UserRole', {
    UserId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'UserId'
        }
    },
    RoleId: {
        type: DataTypes.INTEGER,
        references: {
            model: Role,
            key: 'RoleId'
        }
    }
});
UserRole.belongsTo(models.User, {foreignKey: 'UserId'});
UserRole.belongsTo(models.Role, {foreignKey: 'RoleId'});

module.exports = UserRole