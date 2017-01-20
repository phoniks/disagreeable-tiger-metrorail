'use strict'

const getFields = require('./getFields')

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
  'Passengers': Passengers,
  'Stations': Stations,
  'Trains': Trains,
  'Tickets': Tickets
}

const typeToAssociations = {
  'Tickets':  [Tickets.hasOne(Passengers, {as: 'ticket'}),
              Tickets.belongsTo(Stations, {as: 'destination'})],
  'Stations': [Stations.hasMany(Passengers, {as: 'station'}),
              Stations.belongsTo(Stations, {as: 'nextStation'})],
  'Trains':   [Trains.hasMany(Passengers, {as: 'train'}),
              Trains.belongsTo(Stations, {as: 'station'})],
  'Passengers':  null
}

db.update = (type, data, callback) => {
  data = data || {id: undefined}
  const updateFields = getFields(type)

  stringToType[type].findOrCreate({where: {id: data.id}, include: typeToAssociations[type]})
  .spread( (instance, created) => {
    console.log("CREATED:", created)
    instance.update(updateFields)
      .then( result => {
        data.id = result.dataValues.id
        callback(result)
      })
  })
}

db.findAll = (type, where, is, callback) => {
  const searchable = {}
  searchable[where] = is
  if(type){
    stringToType[type].findAll({where: searchable})
    .then( instance => {
      const arrayOfDataValues = instance.map( _ => {
        return instance.dataValues
      })
      callback(arrayOfDataValues)
    })
  }
}

db.findOne = (type, where, is, callback) => {
  const searchable = {}
  searchable[where] = is
  if(type){
    stringToType[type].find({where: searchable})
    .then( instance => {
      callback(instance.dataValues)
    })
  }
}

module.exports = db


// db.update('Passengers', {id: '7b6be0f8-5754-4953-a893-63da994f8176', ticket_id: '8edf9b74-b9ea-417d-8c62-0aaeda4ff870'}, result => {myResult1 = result})
