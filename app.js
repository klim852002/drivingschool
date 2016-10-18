var express = require('express')
var app = express()
var layout = require('express-ejs-layouts')
var bodyParser = require('body-parser')

// mongoose stuffs
var mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/driving-school')
// set views and layout
app.set('view engine', 'ejs')
app.use(layout)
// serve static files
app.use(express.static(__dirname + '/public'))

var frontendRoutes = require('./routes/lessons')
var ajaxRoutes = require('./routes/lessons_api')

var usersRoutes = require('./routes/users')
var usersAPIRoutes = require('./routes/users_api')
// parse ajax json and form data
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
// only render ejs files
app.use('/lessons', frontendRoutes)
// only handle ajax request
app.use('/api/lessons', ajaxRoutes)
// only render ejs files
app.use('/users', usersRoutes)
// only handle ajax request
app.use('/api/users', usersAPIRoutes)

app.listen(3000)
console.log('Server started')
