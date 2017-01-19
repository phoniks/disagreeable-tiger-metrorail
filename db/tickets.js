const Sequelize = require('sequelize')
const util = require('util')
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

const {Trains, Passengers, Stations, Tickets} = require('../dbUp')


getPassengers = options => {
  if(options.ticketId){

  }
}

create = options => {
  if(options.obj == 'ticket'){
    return Tickets.create({destionation_id: options.destination}).then( ticket => {
      ticket.save()
      return ticket.dataValues.id
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
