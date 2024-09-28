const express = require('express');
const router = express.Router();
const dealerController = require('../controllers/dealerController');

router.post('/dealers', dealerController.createDealer);
router.get('/dealers', dealerController.getAllDealers);
router.put('/dealers/:id', dealerController.updateDealer);
router.delete('/dealers/:id', dealerController.deleteDealer);

module.exports = router;
