'use strict'

const db = require('../db/index.js')

class Ticket{
  constructor(options={}){

    const {owner, train, destination_id, id} = options

    // Database matching
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

}

db.sequelize.sync().then( _ => {
  console.log("I\'M SYNCHED!");
  // let george = new Ticket()
  let frankie = new Ticket({id: '3a43b299-6bf3-49c4-b2ad-b67a6f4d2ed4', destination_id: '3B43b299-6bf3-49c4-b3ad-b67a6f4d2ed4'})
  // db.update('ticket', frankie)
  db.findAll('ticket', 'id', '3a43b299-6bf3-49c4-b2ad-b67a6f4d2ed4', result => {
    console.log("FIND RESULT:", result);
  })
})

module.exports = {
  Ticket
}
