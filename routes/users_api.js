var express = require('express')
var router = express.Router()

var User = require('../models/user')

router.get('/', function (req, res) {
  User.find({}, function (err, allUsers) {
    res.json(allUsers)
  })
})

router.post('/', function (req, res) {
  // res.send(req.body)
  // we can use req.body.user becos the data is contained inside the form data within the http request. (name=user[local][name]). we are taking the user data within the body of the request. this can be perform as body-parser package is installed.
  User.create(req.body.user, function (err, newUser) {
    res.json(newUser)
  })
})

module.exports = router
