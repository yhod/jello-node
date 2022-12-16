const db = require('../database/models');
const { Category, Product } = db;
const Op = db.Sequelize.Op;

// Create and Save a new Category
exports.create = async (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
            message: 'Name can not be empty!',
        });
        return;
    }

    try {
        const {name, description} = req.body;
        const category = await Category.create({name, description});
        res.status(201).send(category);
    } catch(err) {
        res.status(500).send({
            message:
                err.message || 'Some error occurred while creating the category.',
        });
    }
};

// Retrieve all Categories from the database.
exports.findAll = async (req, res) => {
    const { name, expand } = req.query;
    const condition = name? { name } : undefined;
    const include = expand ? { model: Product, as: 'products' }: undefined;
    try {
        const categories = await Category.findAll({
            where: condition,
            include,
        });
        res.send(categories);
    } catch(err) {
        res.status(500).send({
            message:
                err.message || 'Some error occurred while retrieving categories.',
        });
    }
};

// Find a single Category with an id
exports.findOne = async (req, res) => {
    const {id} = req.params;
    const { expand } = req.query;
    const include = expand ? { model: Product, as: 'products' }: undefined;

    try {
        const category = await Category.findByPk(id, {include});
        if (category) {
            res.send(category);
        } else {
            res.status(404).send({
                message: `Cannot find category with id=${id}.`,
            });
        }
    } catch(err) {
        res.status(500).send({
            message: err.message || 'Error retrieving category with id=' + id,
        });
    }
};

// Delete a Category with the specified id in the request
exports.delete = (req, res) => {

};

// Delete all Categories from the database.
exports.deleteAll = (req, res) => {

};
