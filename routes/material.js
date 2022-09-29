const express = require('express')
const router = express.Router()
const upload = require("../middleware/multer");
const materialController = require('../controllers/material') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/:type', materialController.getMaterial)
router.post('/addMat', upload.single('file'), materialController.createMaterial)

module.exports = router