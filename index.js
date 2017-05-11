var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var cors = require('cors')

var server = express()
var port = 8000
var connectionString = 'mongodb://bookes:bookes@ds139725.mlab.com:39725/bookes'
var connection = mongoose.connection

mongoose.connect(connectionString, {
  server: { socketOption: { keepAlive: 300000, connectTimeoutMS: 30000 } },
  replset: { socketOption: { keepAlive: 300000, connectTimeoutMS: 30000 } }
})

connection.on('error', function (err) {
  console.log('There was a connection problem', err)
})

connection.once('open', function () {
  console.log('We are now connected')
  server.listen(port, function () {
    console.log('The server is listening on port: ', port)
  })
})


server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extend: true }))
server.use(cors())
server.use('/', express.static(`${__dirname}/public/`))

// Any code on top of this comment is always the same

server.get('/jobs', function(req, res, next){
   Job.find({}).then(function (jobs) {
    res.send(jobs)
  })
})

server.post('/jobs', function(req, res, next){
  var newJob = req.body
  Job.create(newJob).then(function(createdJob){
     res.send(createdJob)
  })
})

var Schema = mongoose.Schema

var JobsSchema = new Schema({
  title: { type: String, required: true },
  rating: { type: Number, default: 1 },
  salary: { type: Number }
})
var Job = mongoose.model('Job', JobsSchema)

/////////////////////////////////////////////////////// House
server.get('/houses', function(req, res, next){
   House.find({}).then(function (data) {
    res.send(data)
  })
})

server.post('/houses', function(req, res, next){
  var newHouse = req.body
  House.create(newHouse).then(function(createdHouse){
     res.send(createdHouse)
  })
})

var Schema = mongoose.Schema

var HousesSchema = new Schema({
  image: { type: String, required: true },
  price: { type: Number, required: true },
  city: { type: String, required: true },
  beds: { type: Number }
})
var House = mongoose.model('House', HousesSchema)


/////////////////////////////////////////////////////// Car
server.get('/cars', function(req, res, next){
   Car.find({}).then(function (data) {
    res.send(data)
  })
})

server.post('/cars', function(req, res, next){
  var newCar = req.body
  Car.create(newCar).then(function(createdCar){
     res.send(createdCar)
  })
})

var Schema = mongoose.Schema

var CarsSchema = new Schema({
  image: { type: String, required: true },
  make: { type: String, required: true },
  model: { type: String, required: true },
  price: { type: Number, required: true }
})
var Car = mongoose.model('Car', CarsSchema)




















