const express = require('express');
const router = express.Router();
const crudController = require('../controllers/crudController');

const tableName = 'Status_For_Complaint';  
const endPoint = 'status_for_complaint'; 

router.post(`/${endPoint}`, crudController.createRecord(tableName));
router.get(`/${endPoint}`, crudController.getAllRecords(tableName));
router.put(`/${endPoint}/:id`, crudController.updateRecord(tableName));
router.delete(`/${endPoint}/:id`, crudController.deleteRecord(tableName));

module.exports = router;
