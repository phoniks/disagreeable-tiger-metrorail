const models = require('../models')
const repl = require('repl')
const db = require('./')
const {store} = require('../')
const {createTrain} = require('../actions')

const createPerson = options => {
  return new models.Passenger.Passenger(options)
}
const createTicket = options => {
  return new models.Ticket.Ticket(options)
}

const r = repl.start()

r.context.db = db
r.context.models = models
r.context.createTicket = createTicket
r.context.createPerson = createPerson
r.context.seq = db.sequelize
r.context.Passenger = models.Passenger.Passenger
r.context.Ticket = models.Ticket.Ticket
r.context.createTrain = createTrain
r.context.store = store
