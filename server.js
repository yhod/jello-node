const app = require('./app');

app.listen(process.env.PORT || 3003, () => {
    console.log('Server is running on port 3003');
    console.log('Press Ctrl+C to quit.');
});
