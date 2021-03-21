const { Router } = require('express');

const router = Router();
const collectionController = require('../controllers/collection')

// Get All
router.get('/collections', collectionController.collections)
router.get('/figure/create', collectionController.create);
router.post('/figure/update', collectionController.update);
router.post('/figure/clear', collectionController.delete);

module.exports = router;
