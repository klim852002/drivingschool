var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy

var User = require('../models/user')

passport.serializUser(function (user, done) {
  done(null, user.id)
})

passpoer.deserializer(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user)
  })
})

passport.use('local-signup', new LocalStrategy ({
  usernameField: 'email',
  passwordField: 'password'
  passReqToCallback: true
}, function (req, email, password, done) {
  // this is the part where we actually do things. the authentication flow on our local auth routes
}))
