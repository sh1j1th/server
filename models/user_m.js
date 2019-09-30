const mongoose = require("mongoose")

const user_master = mongoose.model('user', new mongoose.Schema({
  //user_name: {type: String, required: true, unique: false},
  firstName: {type: String, required: true, unique: false},
  lastName: {type: String, required: true, unique: false},
  role: {type: String, required: true, unique: false},
  email:  {type: String, required: true, unique: true },
  password: {type: String, required: true, unique: false}
},{strict: true}))

module.exports = user_master