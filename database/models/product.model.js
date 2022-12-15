const {
    Model,
} = require('sequelize');
const models = require('../models');
const {Color} = require('../../enums');

module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {
    //   Product.belongsTo(models.Category);
    // }
    }

    Product.init({
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
        price: DataTypes.DOUBLE,
        color: {
            type: sequelize.Sequelize.ENUM(Object.values(Color)),
            defaultValue: Color.Green,
        },
    }, {
        sequelize,
        modelName: 'Product',
    });
    return Product;
};
