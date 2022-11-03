const express = require('express');
const router = express.Router();
const meController = require('../app/controllers/MeController')

//newsController.index
router.get('/stored/products',meController.index)
router.get('/trash/products',meController.trashProduct)
module.exports = router