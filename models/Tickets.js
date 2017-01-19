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

    db.create({obj: 'ticket', destination, cb: id => {
      this._id = id
    }})
  }

  // Getters
  get id(){
    return this._id
  }

  // Setters
  set id(newId){
    console.error('Cannot change id, will break database')
  }

  // Methods

}

let george = new Ticket()
console.log("George: ", george);

module.exports = {
  Ticket
}
