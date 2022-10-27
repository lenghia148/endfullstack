const express = require('express');
const router = express.Router();
const herbalTeaController = require('../app/controllers/HerbalTeaController')

//newsController.index
router.post('/store',herbalTeaController.store)
router.get('/create',herbalTeaController.create)

router.get('/:slug',herbalTeaController.show)
router.get('/',herbalTeaController.index)

module.exports = router