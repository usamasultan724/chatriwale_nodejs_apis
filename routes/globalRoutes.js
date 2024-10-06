const express = require('express');
const router = express.Router();
const crudController = require('../controllers/crudController');


router.get('/tables', crudController.getAllTableNames());

module.exports = router;
