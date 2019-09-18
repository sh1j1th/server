const express = require('express')
const router = express.Router()
const Learner = require('../models/learner')
const mongoose = require('mongoose')
const db = "mongodb://localhost:27017/maindb"

mongoose.connect(db,{ useNewUrlParser: true, useUnifiedTopology: true }, err =>{
    if (err) {
        console.error('Error!' + err)
    }else {
        console.log('Connected to mongdb')
    }
})

router.get('/', (req, res) => {
    res.send('From API route')
})

router.post('/learnerRegister',( req, res) =>{
    let LearnerData = req.body
    let learner = new Learner(LearnerData)
    learner.save((error, registeredLearner) =>{
        if (error){
            console.log(error)
        }else {
            res.status(200).send(registeredLearner)
        }
    })
})

router.post('/login', (req, res) =>{
    let userData = req.body
//create a condition here to route based on toggle value
    Learner.findOne({email: userData.email}, (error, user) =>{
        if (error) {
            console.log(error)
        } else {
            if (!user) {
                res.status(401).send('Invalid email')
            } else
            if (user.password !== userData.password){
                res.send('Invalid password')
            } else {
                res.status(200).send(user)
            }
        }
    })  
})

module.exports = router