'use strict'
const db = require('../db/index.js')

class Ticket{
  static makeTicket(setMe){
    db.update('Tickets', {name: 'bob'}, dataValues => {
      setMe.ticket = new Ticket(dataValues)
    })
  }

  constructor(options={}){
    const {owner, train, destination_id, id} = options
    this._id = id
    this.destination_id = destination_id
  }

  // Getters
  get id(){
    return this._id
  }

  // Setters
  set id(newId){
    this._id = newId
  }

  // Methods
  update(){
    db.update('Tickets', this, ( result => {

    }))
  }

  populateFromId(id){
    db.findOne('Tickets', 'id', this.id, val => {
      this.destination_id = val.destination_id
    })
  }
}

module.exports = {
  Ticket
}
