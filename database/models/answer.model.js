const {
    Model,
} = require('sequelize');
const { Sequelize } = require('../models');
const models = require('../models');

module.exports = (sequelize, DataTypes) => {
    class Answer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    }
    Answer.init({
        id: {
            type: sequelize.Sequelize.UUID,
            defaultValue: sequelize.Sequelize.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: 'Answer',
    });
    return Answer;
};
