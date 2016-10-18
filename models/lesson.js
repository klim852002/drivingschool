var mongoose = require('mongoose')

var lessonSchema = new mongoose.Schema({
  name: String,
  date: Date,
  location: String
})

var Lesson = mongoose.model('Lesson', lessonSchema)

module.exports = Lesson
