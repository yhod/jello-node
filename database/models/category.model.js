const {
    Model,
} = require('sequelize');
const models = require('../models');

module.exports = (sequelize, DataTypes) => {
    class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        static associate(models) {
            Category.hasMany(models.Product, {
                foreignKey: 'category',
                as: 'products',
                onDelete: 'CASCADE',
            });
        }
    }
    Category.init({
        id: {
            type: sequelize.Sequelize.UUID,
            defaultValue: sequelize.Sequelize.UUIDV4,
            primaryKey: true,
        },
        name: {
            type:  DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        description: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'Category',
    });
    return Category;
};
