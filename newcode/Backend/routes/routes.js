const express = require('express')
const router = express.Router()

const bodyParser = require('body-parser')
const cors = require('cors')

router.use(express.urlencoded({ extended: false }))
router.use(express.json())
router.use(
    bodyParser.urlencoded({ extended: true, limit: '50mb' }),
    cors({ 'Access-Control-Allow-Origin': '*' }),
)

const mailController = require('../controllers/mail.controller')
router.post('/sendMail', mailController.sendMail.bind())
module.exports.routes = router
