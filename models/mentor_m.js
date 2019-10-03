const mongoose = require("mongoose")

const mentor_master = mongoose.model('mentor', new mongoose.Schema({
  //user_name: {type: String, required: true, unique: false},
  firstName: {type: String, required: true, unique: false},
  lastName: {type: String, required: true, unique: false},
  email:  {type: String, required: true, unique: true },
  linkedinUrl:  {type: String, required: false, unique: false },
  yearsOfExperience:  {type: String, required: false, unique: false },
  password: {type: String, required: true, unique: false},
  status: {type: String, required: false, unique: false}
},{strict: true}))

module.exports = mentor_master