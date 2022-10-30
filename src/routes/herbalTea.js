const express = require('express');
const router = express.Router();
const herbalTeaController = require('../app/controllers/HerbalTeaController')

//newsController.index
router.post('/store',herbalTeaController.store)
router.get('/create',herbalTeaController.create)
router.get('/:id/edit',herbalTeaController.edit)
router.put('/:id',herbalTeaController.update)
router.delete('/:id',herbalTeaController.delete)
router.get('/:slug',herbalTeaController.show)
router.get('/',herbalTeaController.index)

module.exports = router