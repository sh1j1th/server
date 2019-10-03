const jwt = require('jsonwebtoken')// JSON Web Token to Secure REST APIs
let admin_model = require('../models/admin_m')
const config = require('./../config/config')// config/config.js

function create_token(username) {
    // sign with default (HMAC SHA256)
    let expire_time = Math.floor(Date.now() / 1000) + (config.jwt_token_valid * 60) // jwt_token_valid is in Minutes, so convert in to Seconds from now
    let token = jwt.sign({ username: username, exp: expire_time }, config.secret_word)
    return token
}

module.exports = {

    authenticate: async (req, res) => {// Check valid admin or not
        try {
            //console.log(req.body)
            let admins = await admin_model.find({ username: req.body.username, password: req.body.password }).exec()
            console.log(admins.length)
            //console.log(admins)
            if (admins.length == 1) {// Found admin record for given email_id & pass_word
                res.send(create_token(req.body.username))// Send token to Frontend if a Valid admin is Logging in
                //res.send("Valid admin")
            } else {
                res.send("Invalid Credentials")// admin not found or he did not Register with us
            }
        } catch (err) {
            res.status(500).send(err)
        }
    }
}