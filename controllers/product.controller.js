const db = require('../database/models');
const Product = db.Product;
const Op = db.Sequelize.Op;

// Create and Save a new Product
exports.create = async (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
            message: 'Name can not be empty!',
        });
        return;
    }

    try {
        const {name, description, price, category, color} = req.body;
        const product = await Product.create({name, description, price, category, color});
        res.send(product);
    } catch(err) {
        res.status(500).send({
            message:
                err.message || 'Some error occurred while creating the Product.',
        });
    }
};

// Retrieve all Products from the database.
exports.findAll = async (req, res) => {
    const { category, name } = req.query;
    const whereCondition = { };
    if(category) whereCondition.category = category;
    if(name) whereCondition.name = name;

    try {
        const products = await Product.findAll({where: whereCondition});
        res.send(products);
    } catch(err) {
        res.status(500).send({
            message:
                err.message || 'Some error occurred while retrieving products.',
        });
    }
};

// Find a single Product with an id
exports.findOne = async (req, res) => {
    const {id} = req.params;

    try {
        const product = await Product.findByPk(id);
        if (product) {
            res.send(product);
        } else {
            res.status(404).send({
                message: `Cannot find product with id=${id}.`,
            });
        }
    } catch(err) {
        res.status(500).send({
            message: err.message || 'Error retrieving category with id=' + id,
        });
    }
};

// Delete a Product with the specified id in the request
exports.delete = (req, res) => {

};

// Delete all Products from the database.
exports.deleteAll = (req, res) => {

};
