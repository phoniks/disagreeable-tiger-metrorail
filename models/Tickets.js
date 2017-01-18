'use strict'

class Ticket{
  constructor(stationOrigin, stationDestination, train){
    this._id = undefined
    this._stationOrigin = stationOrigin
    this._stationDestination = stationDestination
  }

  // Getters
  get id(){
    return this._id
  }

  get stationOrigin(){
    return _stationOrigin
  }

  get stationDestination(){
    return _stationDestination
  }

  // Setters

  // Methods


}

module.exports = {
  Ticket
}