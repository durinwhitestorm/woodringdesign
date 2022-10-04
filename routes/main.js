const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth') 
const homeController = require('../controllers/home')
const materialController = require('../controllers/material') 
const ringController = require('../controllers/ring')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', materialController.getIndex)
router.get('/login', authController.getLogin)
router.post('/login', authController.postLogin)
router.get('/logout', authController.logout)
router.get('/signup', authController.getSignup)
router.post('/signup', authController.postSignup)
router.post('/save', ringController.saveRing)
// router.get('/profile', ringController.getRings)

module.exports = router