const {Model, DataTypes} = require('sequelize');

const BookOrder = sequelize.define('BookOrder', {
    BookOrderId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    BookId: {
        type: DataTypes.INTEGER,
        references: {
            model: Book,
            key: 'BookId'
        }
    },
    OrderId: {
        type: DataTypes.INTEGER,
        references: {
            model: Order,
            key: 'OrderId'
        }
    },
});
BookOrder.belongsTo(models.Book, {foreignKey: 'BookId'});
BookOrder.belongsTo(models.Order, {foreignKey: 'OrderId'});

module.exports = BookOrder;