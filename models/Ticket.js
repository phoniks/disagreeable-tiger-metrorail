'use strict'
const db = require('../db/index.js')

class Ticket{
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
      console.log("TEST CALLBACK 1:");
    }))
  }
}

module.exports = {
  Ticket
}
