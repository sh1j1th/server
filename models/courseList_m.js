const mongoose = require("mongoose")

const course_list_master = mongoose.model('course_list', new mongoose.Schema({
  courseTitle:   {type: String, required: true,  unique: false },
  courseDescription:   {type: String, required: true,  unique: false },
  commission: {type: Number, required: true,  unique: false}
},{strict: true}))

module.exports = course_list_master