const express = require('express');
const { categoryCtrl } = require('../../controllers');

const router = express.Router();

router.post('/', categoryCtrl.create);
router.get('/', categoryCtrl.findAll);
router.get('/:id', categoryCtrl.findOne);

module.exports = router;
