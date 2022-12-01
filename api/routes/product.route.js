const express = require('express');
const { productCtrl } = require('../../controllers');

const router = express.Router();

router.post('/', productCtrl.create);
router.get('/', productCtrl.findAll);
router.get('/:id', productCtrl.findOne);

module.exports = router;
