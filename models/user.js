var mongoose = require('mongoose')
var bcrypt = require('bcrypt')

var userSchema = new mongoose.Schema({
  local: {
    name: String,
    age: Number,
    password: {
      type: String,
      required: true
    }
  }
})

userSchema.pre('save', function (next){
  console.log('before save hash password')
  console.log(this)

  var user = this

  bcrypt.genSalt(5, function (err, salt){
    if (err) return next(err)

    bcrypt.hash(user.local.password, salt, function (err, hash){
      if (err) return next (err)

    user.local.pasword = hash
    console.log('ater hash')
    console.log(user)
    next()
    })
  })
})

userSchema.post('save', function () {
  console.log('save successful')
})

var User = mongoose.model('User', userSchema)

module.exports = User
