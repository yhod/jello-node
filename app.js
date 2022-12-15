const express = require('express');
const contextService = require('request-context');
const apiValidator = require('openapi-validator-middleware');
const swaggerUi = require('swagger-ui-express');

const {reqLogger} = require('./middlewares/logger');
const {
    categoryRoute,
    productRoute,
    userRoute,
} = require('./api/routes');

const apiSchema = require('./api/api.schema');
apiValidator.init(apiSchema);


const app = express();
app.use(contextService.middleware('request'));
app.use(express.json());
app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
    res.send('Hello Express')
});

app.use(reqLogger);
//app.use(apiValidator.validate);
app.use('/api/category', categoryRoute);
app.use('/api/product', productRoute);
app.use('/api/user', userRoute);

// swaggerUi
const swaggerDocument = require('./api/api.schema');
app.use(
    '/api/docs',
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument),
);

module.exports = app;
