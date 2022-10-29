const express = require('express');
const router = express.Router();
const meController = require('../app/controllers/MeController')

//newsController.index
router.get('/stored/products',meController.index)

module.exports = router