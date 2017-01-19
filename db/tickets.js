const Sequelize = require('sequelize')
const util = require('util')
var sequelize = new Sequelize('metrorail', null, null, {
  dialect: "postgres",
  port: 5432,
})

sequelize
.authenticate()
.then(function(err) {
  console.log('Connection has been established successfully2.')
}, function (err) {
  console.log('Unable to connect to the database:', err)
})

const {Trains, Passengers, Stations, Tickets} = require('./models')


getPassengers = options => {
  if(options.ticketId){

  }
}

create = options => {
  if(options.obj == 'ticket'){
    Tickets.create({destination_id: destination})
    .error( err => {
      console.error("ERROR: ", err);
    })
    .then( instance => {
      options.cb(instance.dataValues.id)
    })
  }
}

findAll = options => {

}
// findAll(table, whereSomething, equalsSomething)

module.exports = {
  getPassengers,
  create,
  findAll
}
