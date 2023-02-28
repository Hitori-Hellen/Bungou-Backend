const { Model, DataTypes } = reuqire('sequelize')

const Order = sequelize.define('Order', {
    OrderId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    UserId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'UserId'
        }
    },
    createAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    state: {
        type: DataTypes.BOOLEAN,
    },
})
models.Order.belongsToMany(models.Order, {
    through: models.BookOrder,
    foreignKey: 'OrderId',
    otherKey: 'BookId',
})
models.Order.belongsTo(models.User, {foreignKey: 'UserId'});

module.exports = Order;