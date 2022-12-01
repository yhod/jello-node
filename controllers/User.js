const db = require('../database/models');
const User = db.User;
const Op = db.Sequelize.Op;

// Create and Save a new User
exports.create = (req, res) => {
    // Validate request
    if (!req.body.name) {
        res.status(400).send({
            message: 'Name can not be empty!',
        });
        return;
    }

    // Create a User
    const user = {
        name: req.body.name,
        email: req.body.email,
    };

    User.create(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || 'Some error occurred while creating the User.',
            });
        });
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
    const name = req.query.name;
    const condition = name ? {name: {[Op.iLike]: `%${name}%`}} : null;

    User.findAll({ where: condition })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || 'Some error occurred while retrieving users.',
            });
        });
};

// Find a single User with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    User.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find User with id=${id}.`,
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: 'Error retrieving User with id=' + id,
            });
        });
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {

};

// Delete all Users from the database.
exports.deleteAll = (req, res) => {

};
