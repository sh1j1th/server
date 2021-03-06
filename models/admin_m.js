const mongoose = require("mongoose")

const admin_master = mongoose.model('admin', new mongoose.Schema({
  username: {type: String, required: true, unique: false},
  password: {type: String, required: true, unique: false}
},{strict: true}))

module.exports = admin_master 