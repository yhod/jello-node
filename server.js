const express = require('express');
const userController = require('./controllers/User');

const app = express();
app.use(express.json());
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send('Hello Express')
});

const router = require("express").Router();
router.post("/", userController.create);
router.get("/", userController.findAll);
router.get("/:id", userController.findOne);
app.use('/api/user', router);

console.log('Server is running on port 3000');
app.listen(process.env.PORT || 3000)
