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

const Trains = sequelize.import('./db/trains.js')
const Passengers = sequelize.import('./db/passengers.js')
const Tickets = sequelize.import('./db/tickets.js')
const Stations = sequelize.import('./db/stations.js')
const models = {Trains, Passengers, Tickets, Stations}

Trains.associate(models)
Passengers.associate(models)
Tickets.associate(models)
Stations.associate(models)

console.log('MODELS', models)

sequelize.sync({force: true}).then( _ => {
  console.log('Done sync\'ing')
})

// module.exports = {
//   Tickets, Stations, Trains, Passengers
// }
