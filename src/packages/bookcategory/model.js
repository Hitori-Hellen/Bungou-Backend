const {Model, DataTypes} = require('sequelize');
const { Book, Category } = require('../../models/model');

const BookCategory = sequelize.define('BookCategory', {
    BookId: {
        type: DataTypes.INTEGER,
        references: {
            model: Book,
            key: 'BookId'
        }
    },
    CategoryId: {
        type: DataTypes.INTEGER,
        references: {
            model: Category,
            key: 'CategoryId'
        }
    }
});
BookCategory.belongsTo(models.Book, {foreignKey: 'BookId'});
BookCategory.belongsTo(models.Category, {foreignKey: 'CategoryId'});

module.exports = BookCategory