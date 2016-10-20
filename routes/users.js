var express = require('express')
var router = express.Router()

var User = require('../models/user')

// router.get('/', function (req, res) {
//   User.find({}, function (err, allUsers) {
//     console.log(allUsers)
//     res.render('users/index', {
//       allUsers: allUsers
//     })
//   })
// })

router.get('/login', function (req, res){
  res.render('users/login', {message: req.flash('loginMessage')})
})

router.post('/login', function (req, res) {
  var user= req.body.user
  User.findOne({ 'local.email': user.local.email }, function (err, foundUser) {
    if (err) res.send(err.message)

    if (foundUser) {
      foundUser.authenticate(user.local.password, function (err, authenticated) {
        if (err) res.send(err)

        if (authenticated) {
          req.flash('loginMessage', 'Login successful!')
          res.redirect('/profile')
        } else {
          req.flash('loginMessage','You have entered the wrong email or password. Please retry')
          res.redirect('/login')
        }
      })
    } else {
      // if application cannot find user by email
      req.flash('loginMessage', 'Email not found!')
      res.redirect('/login')
    }
  })
})

router.post('')


module.exports = router
