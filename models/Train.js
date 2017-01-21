const defaultOptions = {id: undefined, capacity: 0, passnegers: [], currentStation: 0}
const {store} = require('../')

class Train{
  constructor(options=defaultOptions){
    this._id = options.id,
    this.capacity = options.capacity,
    this.passengers = options.passengers,
    this._currentStation = options.currentStation

    const newTrains = store.getState().trains.splice()
    newTrains.push(this)

    store.dispatch({type: 'CREATE_TRAIN', trains: newTrains})
    // Call create_train action

  }

// get the number of a particular train.
  get id(){
    console.log(this._id);
  }
// get the capacity for passengers of a particular train.
  getCapacity(){
    return this.capacity
  }
// get the passengers of a particular train.
  getPassengers(){
    return this.passengers
  }
// determine whether a particular train is full (at capacity) or not.
  isFull(){
    return this.passengers.length > this.capacity
  }
// determine the current station of a particular train.
  get currentStation(){
    return this._currentStation
  }

  set currentStation(newStation){
    this._currentStation = newStation
  }
// determine the next station of a particular train.
  nextStation(){
    return this.currentStation.nextStation
  }
// determine which train is arriving next at a particular station.
  static arrivingNextAt(station){
    db.findAll('Trains', nextStation, station)
  }
// move a train to its next station.
  advance(){
    this.currentStation = this.nextStation()
  }
// offboard passengers whose destination is a train's current station.
  offboard(){
    let here = this.currentStation
    this.passengers.map(() => {
      if ( currentValue === here ) { array.splice(index, 1) }
    })
    db.updateOne('Trains', this.id, this)
  }
// onboard passengers of a train at the current station.
  onboard(){
    this.currentStation.passengers
  }
// find a train by its number.
  static findByNumber(number){
    db.findAll('Trains', 'id', number)
  }
// create a new train.
// save new trains to the database.
  save(){
    db.create('Trains', this)
  }
// update existing trains in the database.
  update(){
    db.update('Trains', this.id, this)
  }
// delete a train from the database.
  delete(){
    db.delete('Trains', this.id)
  }
}

module.exports = {
  Train
}
