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

const {Trains, Stations, Passengers, Tickets} = require('./models')

Tickets.hasOne(Passengers, {as: 'ticket', constraints: false})
Stations.hasMany(Passengers, {as: 'station'})
Trains.hasMany(Passengers, {as: 'train'})
Tickets.belongsTo(Stations, {as: 'destination', constraints: false})
Trains.belongsTo(Stations, {as: 'station'})
Stations.belongsTo(Stations, {as: 'nextStation'})

sequelize.sync({force: true}).then( _ => {
  console.log('Done sync\'ing')
})

module.exports = {
  Tickets, Stations, Trains, Passengers
}
