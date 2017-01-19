'use strict'

const db = require('../db/index.js')
const {sequelize} = require('../dbUp.js')

class Ticket{
  constructor(options={}){

    const {owner, train, destination} = options

    // Database matching
    this._id = undefined
    this.destination = destination


    // Derived
    this.owner = owner
    this.train = train

    db.create({obj: 'ticket', destination})
    .then( id => {
      this._id = id
      // db.getPassengers({ticketId: id}, passenger => {
      //  this.owner = passenger
      // })
    })
  }

  // Getters
  get id(){
    return this._id
  }

  // Setters
  set id(newId){
    console.error('Cannot change id, will break database')
    // return this._id = newId
  }

  // Methods

}

let george = new Ticket()

module.exports = {
  Ticket
}
