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


require('./migrations/index.js')
const Trains = sequelize.import('./migrations/trains.js')
const Passengers = sequelize.import('./migrations/passengers.js')
const Tickets = sequelize.import('./migrations/tickets.js')
const Stations = sequelize.import('./migrations/stations.js')
const models = {Trains, Passengers, Tickets, Stations}

Promise.all([
  Trains.associate(models),
  Stations.associate(models),
  Tickets.associate(models)
]).then( _ => {
  sequelize.sync({force: true}).then( _ => {
    console.log('Done sync\'ing')
  })
})
