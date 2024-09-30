// const express = require('express');
// const router = express.Router();
// const dealerController = require('../controllers/dealerController');

// router.post('/dealers', dealerController.createDealer);
// router.get('/dealers', dealerController.getAllDealers);
// router.put('/dealers/:id', dealerController.updateDealer);
// router.delete('/dealers/:id', dealerController.deleteDealer);

// module.exports = router;


const express = require('express');
const router = express.Router();
const crudController = require('../controllers/crudController');

const tableName = 'Dealer';  
const endPoint = 'dealer'; 

router.post(`/${endPoint}`, crudController.createRecord(tableName));
router.get(`/${endPoint}`, crudController.getAllRecords(tableName));
router.put(`/${endPoint}/:id`, crudController.updateRecord(tableName));
router.delete(`/${endPoint}/:id`, crudController.deleteRecord(tableName));

module.exports = router;
