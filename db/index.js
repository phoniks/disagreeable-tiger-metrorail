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
  const createType = {
    'passenger': Passengers,
    'station': Stations,
    'train': Trains,
    'ticket': Tickets
  }

  data = data || {id: undefined}
  console.log('DATA', data)
  if(type){
    createType[type].findOrCreate({where: {id: data.id}})
    .spread( (value, created) => {
      console.log("VALUE:", value.get({
        plain: true
      }))
      console.log("CREATED:", created)
    })
      /*
        {
          username: 'sdepold',
          job: 'Technical Lead JavaScript',
          id: 1,
          createdAt: Fri Mar 22 2013 21: 28: 34 GMT + 0100(CET),
          updatedAt: Fri Mar 22 2013 21: 28: 34 GMT + 0100(CET)
        }
        created: true
      */
  }
}

db.findAll = options => {

}
// findAll(table, whereSomething, equalsSomething)

module.exports = db
