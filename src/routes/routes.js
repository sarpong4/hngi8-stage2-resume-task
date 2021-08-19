const express = require('express');
const router = express.Router();

const services = require('../services/render');
const controller = require('../controllers/msgController');

router.get('/', services.home);

router.post('/', controller.create);

module.exports = router;