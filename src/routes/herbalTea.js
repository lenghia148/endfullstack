const express = require('express');
const router = express.Router();
const herbalTeaController = require('../app/controllers/HerbalTeaController')

//newsController.index
router.use('/create',herbalTeaController.create)
router.use('/:slug',herbalTeaController.show)
router.use('/',herbalTeaController.index)

module.exports = router