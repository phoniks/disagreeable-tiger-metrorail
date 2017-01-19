'use strict'

var Sequelize = require('sequelize')
var sequelize = new Sequelize('metrorail', null, null, {
      dialect: "postgres",
      port: 5432,
    })

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.')
  }, function (err) {
    console.log('Unable to connect to the database:', err)
  })


const db = {sequelize, Sequelize}
const Tickets = db.sequelize.import("../migrations/tickets.js")
const Stations = db.sequelize.import("../migrations/stations.js")
const Trains = db.sequelize.import("../migrations/trains.js")
const Passengers = db.sequelize.import("../migrations/passengers.js")

const stringToType = {
  'passenger': Passengers,
  'station': Stations,
  'train': Trains,
  'ticket': Tickets
}

db.getPassengers = (options={}) => {
  console.log("I\'M RUNNING TOO");
  if(options.ticketId){

  }
}

db.create = (options={}) => {
  const {destination} = options
  if(options.obj == 'ticket'){
    Tickets.create({destination_id: destination})
    .error( err => {
      console.error("ERROR: ", err);
    })
    .then( instance => {
      console.log("I\'M HERE NOW");
      options.cb(instance.dataValues.id)
    })
  }
}

db.update = (type, data, callback) => {
  data = data || {id: undefined}
  if(type){
    stringToType[type].findOrCreate({where: {id: data.id}})
    .spread( (instance, created) => {
      console.log('INSTANCE:', instance.update)
      console.log("CREATED:", created)
      instance.update({
        destination_id: '3B43b299-6bf3-49c4-b3ad-b67a6f4d2ed4'
      })
    })
  }
}

db.findAll = (type, where, is, callback) => {
  const searchable = {}
  searchable[where] = is
  if(type){
    stringToType[type].findAll({where: searchable})
    .then( instance => {
      callback(instance)
    })
  }
}

db.findOne = (type, where, is, callback) => {
  const searchable = {}
  searchable[where] = is
  if(type){
    stringToType[type].find({where: searchable})
    .then( instance => {
      callback(instance)
    })
  }
}
// findAll(table, whereSomething, equalsSomething)

module.exports = db
