const express = require('express');
const router = express.Router();
const productsController = require('../app/controllers/ProductsController')

//ProductsController.index

router.get('/tra-thao-duoc',productsController.thaoduoc)

module.exports = router