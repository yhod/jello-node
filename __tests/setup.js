const models = require('../database/models');

module.exports = async () => {
    console.log('Reset test db....');
    await models.sequelize.sync({force: true});
    await models.sequelize.close();
};
