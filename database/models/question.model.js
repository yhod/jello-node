const {
    Model,
} = require('sequelize');
const models = require('../models');
const {Color} = require('../../enums');

module.exports = (sequelize, DataTypes) => {
    class Question extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // static associate(models) {
    //   Product.belongsTo(models.Category);
    // }
        static associate(models) {
            Question.hasMany(models.Answer, {
                foreignKey: 'answer',
                as: 'answers',
                onDelete: 'CASCADE',
            }),
            Question.hasOne(models.Answer, {
                foreignKey: 'answer',
                as: 'correctAnswer',
                onDelete: 'CASCADE',
            });
        }
    }

    Question.init({
        id: {
            type: sequelize.Sequelize.UUID,
            defaultValue: sequelize.Sequelize.UUIDV4,
            primaryKey: true,
        },
        name: {
            type:  DataTypes.STRING,
            allowNull: false,
        },
        createdAt: {
            allowNull: false,
            type: sequelize.Sequelize.DATE,
        },
        updatedAt: {
            allowNull: false,
            type: sequelize.Sequelize.DATE,
        },
    }, {
        sequelize,
        modelName: 'Question',
    });
    return Question;
};
