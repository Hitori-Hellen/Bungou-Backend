const { Model, sequelize } = require('sequelize');

const Category = sequelize.define('Category', {
    CategoryId: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    }
})
models.Category.belongsToMany(models.Category, {
    through: models.BookCategory,
    foreighnKey: 'CategoryId',
    otherKey: 'BookId',
})

module.exports = Category;