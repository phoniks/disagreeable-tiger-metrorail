export default class Passenger{
  constructor(options){
    this._id = options.id,
    this.name = options.name,
    this._ticket = options.ticket,
    this._station = options.station
  }
// get the ID of a particular passenger.
  get id(){
    return this._id
  }
// get the name of a particular passenger.
// get a particular passenger's ticket.
// set the current station of a particular passenger.
  set station(station){
    this._station = station
  }
// buy a ticket for a particular passenger from their current station to another specified station.
  buyTicket(destination){
    return Ticket.purchase(this, destination)
  }
// use a ticket for a particular passenger.
  useTicket(){
    return Ticket.use(this.ticket)
  }
// determine the current train for a particular passenger.
  static currentTrain(passenger){
    return db.findOne( 'Trains', 'passengers', passenger )
  }
// determine the current station for a particular passenger.
  static currentStation(passenger){
    return db.findOne( 'Stations', 'passengers', passenger )
  }
// find a passenger by their ID.
  static passengerByID(id){
    return db.findAll( 'Passengers', 'id', passenger.id )
  }
// find a passenger by their name.
  static passengerByName(name){
    return db.findAll( 'Passengers', 'name', passenger.name )
  }
// find all passengers at a station.
  static passengersAtStation(station_id){
    return db.findAll( 'Passengers', 'station', station_id )
  }
// find all passengers on a train.
  static passengersOnTrain(train_id)
    return db.findAll( 'Passengers','train', train_id )
// create a new passenger.
// save new passengers to the database.
  save(){
    db.create('Passengers', this)
  }
// update existing passengers in the database.
  update(){
    db.update('Trains', this.id, this)
  }
// delete a passenger from the database.
  delete(){
    db.delete( this.id )
  }
}
