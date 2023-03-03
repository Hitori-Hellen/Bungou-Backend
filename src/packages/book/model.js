const {Model, DataTypes} = require('sequelize');

const Book = sequelize.define('Book', {
    BookId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    rating: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    publisher: {
        type: DataTypes.STRING,
        allowNull: false
    },
    length: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    isbn: {
        type: DataTypes.STRING,
        allowNull: false
    },
    citycountry: {
        type: DataTypes.STRING,
        allowNull: false
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false
    },
})
models.Book.belongsToMany(models.Book, {
    through: models.BookCategory,
    foreignKey: 'BookId',
    otherKey: 'CategoryId',
})
models.Book.hasMany(models.Review, {
    foreignKey: 'ReviewId',
})
models.Book.belongsToMany(models.Book, {
    through: models.BookOrder,
    foreignKey: 'BookId',
    otherKey: 'OrderId',
})
module.exports = Book;