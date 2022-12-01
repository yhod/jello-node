const express = require('express');
const { userCtrl } = require('../../controllers');

const router = express.Router();

router.post('/', userCtrl.create);
router.get('/', userCtrl.findAll);
router.get('/:id', userCtrl.findOne);

module.exports = router;
