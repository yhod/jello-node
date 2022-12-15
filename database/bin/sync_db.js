const models = require('../models');

async function recreate (force) {
    try {
        await models.sequelize.sync(force);
    } catch (e) {
        console.log(e);
    }
}

console.log('Sync database tables...');
recreate({ force: false }).then(() => {
    console.log('Done.');
});
