const express = require('express');
const router = express.Router();
const crudController = require('../controllers/crudController');

const tableName = 'City_State';  
const endPoint = 'city_state'; 

router.post(`/${endPoint}`, crudController.createRecord(tableName));
router.get(`/${endPoint}`, crudController.getAllRecords(tableName));
router.put(`/${endPoint}/:id`, crudController.updateRecord(tableName));
router.delete(`/${endPoint}/:id`, crudController.deleteRecord(tableName));

module.exports = router;
