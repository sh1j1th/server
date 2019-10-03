const mongoose = require("mongoose")

const course_master = mongoose.model('course', new mongoose.Schema({
  courseTitle:   {type: String, required: true,  unique: false },
  courseTrainer:   {type: String, required: true,  unique: false },
  courseDuration:   {type: Number, required: true,  unique: false },
  trainerRating:   {type: Number, required: true,  unique: false },
  cost: {type: Number, required: true,  unique: false}
},{strict: true}))

module.exports = course_master
