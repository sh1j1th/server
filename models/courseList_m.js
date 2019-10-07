const mongoose = require("mongoose")

const course_list_master = mongoose.model('course_list', new mongoose.Schema({
  courseTitle:   {type: String, required: true,  unique: true },
  courseDescription:   {type: String, required: true,  unique: false },
  commission: {type: String, required: true,  unique: false}
},{strict: true}))

module.exports = course_list_master