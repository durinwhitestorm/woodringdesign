const express = require('express')
const router = express.Router()
const materialController = require('../controllers/material') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/material/:type', materialController.getMaterial)

module.exports = router