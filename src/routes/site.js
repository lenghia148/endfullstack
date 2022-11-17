const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteController')

//newsController.index
router.use('/contact',siteController.contact )
router.use('/wholesale',siteController.wholesale )
router.use('/introduce',siteController.introduce)
router.use('/',siteController.index)


module.exports = router