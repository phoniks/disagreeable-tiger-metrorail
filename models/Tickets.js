'use strict'

const db = require('../db/index.js')

class Ticket{
  constructor(options={}){

    const {owner, train, destination} = options

    // Database matching
    this._id = undefined
    this.destination = destination


    // Derived
    this.owner = owner
    this.train = train
    // db.getPassengers()
    db.update('ticket', this)
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

}

db.sequelize.sync().then( _ => {
  console.log("I\'M SYNCHED!");
  let george = new Ticket()
  console.log("George: ", george);
})

module.exports = {
  Ticket
}
