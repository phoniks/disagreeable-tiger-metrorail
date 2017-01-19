export default class Station{
  constructor(options){
    this._id = options.id,
    this.location = options.location,
    this.nextStation = options.nextStation,
    this.passengers = options.passengers
  }
// get the ID of a particular station.
  get id(){
    return this._id
  }
// get the location of a particular station.
// get the passengers waiting for a train at a particular station.
  static passengersAt(station){
    db.findAll('Passengers', 'station', station)
  }
// get the passengers who have tickets at a particular station.
  static ticketedPassengersAt(station){
    let allPassengers = Station.passengersAt(Station)
    return allPassengers.filter(passenger => (passenger.ticket !== null))
  }
// get the previous station on the line for a particular station.
  static getPrevious(station){
    db.findAll('Stations').then(stations => {
      stations.filter(station => {
        return station.nextStation === station
      })
    })
  }
// get the next station on the line for a particular station.
// determine which is the next train arriving at a particular station.
// find a station by its ID.
// find a station by its location.
// create a new station.
// save new stations to the database.
// update existing stations in the database.
// delete a station from the database.
}
