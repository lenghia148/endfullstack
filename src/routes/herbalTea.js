const express = require('express');
const router = express.Router();
const herbalTeaController = require('../app/controllers/HerbalTeaController')

//newsController.index
router.post('/store',herbalTeaController.store)
router.get('/create',herbalTeaController.create)
router.post('/handle-form-actions',herbalTeaController.handleFormActions)
router.get('/:id/edit',herbalTeaController.edit)
router.put('/:id',herbalTeaController.update)
router.patch('/:id/restore',herbalTeaController.restore)
router.delete('/:id',herbalTeaController.delete)
router.delete('/:id/force',herbalTeaController.forceDelete)
router.get('/:slug',herbalTeaController.show)
router.get('/',herbalTeaController.index)

module.exports = router