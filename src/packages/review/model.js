const { Model, DataTypes, Sequelize } = require('sequelize');

const Review = sequelize.define('Review', {
    ReviewId: {
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
    UserId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'UserId'
        }
    },
    review: {
        type: DataTypes.STRING,
        allowNull: true
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    rating: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
})
Review.belongsTo(models.Book, {foreignKey: 'BookId'});
Review.belongsTo(models.User, {foreignKey: 'UserId'});

module.exports = Review;