const express = require('express');
const router = express.Router();
const crudController = require('../controllers/crudController');

const tableName = 'Lead_Price_Setup';  
const endPoint = 'lead_price_setup'; 

router.post(`/${endPoint}`, crudController.createRecord(tableName));
router.get(`/${endPoint}`, crudController.getAllRecords(tableName));
router.put(`/${endPoint}/:id`, crudController.updateRecord(tableName));
router.delete(`/${endPoint}/:id`, crudController.deleteRecord(tableName));

// Fetch column names
router.get(`/${endPoint}/columns`, crudController.getColumnNames(tableName));

module.exports = router;
