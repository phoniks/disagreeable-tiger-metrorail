'use strict'
// TODO: Uncomment when ticket class created
// const Ticket = require('./Tickets.js')

class Passenger{
  constructor(name, station){
    this._id = undefined
    this._name = name || ''
    this.tickets = []
    this.currentStation = station || undefined
  }

  // Getters
  get id() {
    return this._id
  }

  get name() {
    return this._name
  }

  get getTrain() {
    return this.currentTrain
  }
  
  get getStation() {
    return this.currentStation
  }

  // Setters
  set id(newID) {
    this._id = newID
  }

  set name(newName) {
    this._name = newName
  }

  set getTrain(newTrain) {
    this.currentTrain = newTrain
  }
  
  set getStation(newStation) {
    this.currentStation = newStation
  }

  // Instance Methods
  useTicket(ticketToUse=0) {
    if( this.tickets[ticketToUse] ){
      this.tickets.slice(ticketToUse, 1)
    }
  }

  buyTicket(destination) {
    // TODO: Uncomment when ticket class created
    // this.tickets.push( new Ticket() )
  }

  deletePassenger(){
    // db call to delete this passenger
  }
  
  // Static Methods
  static findByName(passengerName) {
    const listOfPassengers // = db query
    for( passenger in listOfPassengers){
      if(listOfPassengers[passenger].name === passengerName) return listOfPassengers[passenger]
    }
    return false
  }

  static findByName(passengerID) {
    const listOfPassengers // = db query
    for( passenger in listOfPassengers){
      if(listOfPassengers[passenger].id === passengerID) return listOfPassengers[passenger]
    }
    return false
  }

  // Do we need to return a list of passenger names / ids / or entire passenger objects to make additional calls on?
  static findAllPassengersByStation(station) {
    const listOfPassengers // = db query
    return listOfPassengers.length > 0 ? listOfPassengers : false
  }

  // Do we need to return a list of passenger names / ids / or entire passenger objects to make additional calls on?
  static findAllPassengersOnTrain(train) {
    const listOfPassengers // = db query
    return listOfPassengers.length > 0 ? listOfPassengers : false
  }

}

module.exports = {
  Passenger
}