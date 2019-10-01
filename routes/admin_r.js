const express     = require('express')
const bodyParser  = require('body-parser')
const admin_router = express.Router()

admin_router.use(bodyParser.urlencoded({extended: true}))

let admin_controller = require('../controllers/admin_c')

admin_router.post("/check", admin_controller.authenticate)// Check valid admin or not.

module.exports = admin_router 