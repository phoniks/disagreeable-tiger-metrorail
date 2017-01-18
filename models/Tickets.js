'use strict'

class Ticket{
  constructor(origin, destination, train){
    this._id = undefined
    this._origin = origin
    this._destination = destination
  }

  // Getters
  get id(){
    return this._id
  }

  get origin(){
    return _origin
  }

  get destination(){
    return _destination
  }

  // Setters
  set id(newId){
    return this._id = newId
  }

  set origin(newStation){
    return _origin = newStation
  }

  set destination(newStation){
    return _destination = newStation
  }

  // Methods


}

module.exports = {
  Ticket
}