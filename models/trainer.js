const mongoose = require('mongoose')

const Schema = mongoose.Schema
const trainerSchema = new Schema({
    email: String,
    password: String,
    contact: Number
})

module.exports = mongoose.model('trainer', trainerSchema, 'trainers')