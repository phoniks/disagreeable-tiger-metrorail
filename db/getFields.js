const getFields = type => {
  const updateFields = {associations: []}
  if(type === 'Trains'){
    updateFields['id'] = data.id
    updateFields['capacity'] = data.capacity
    updateFields['station_id'] = data.station_id
  } else if(type === 'Passengers') {
    updateFields['id'] = data.id
    updateFields['name'] = data.name
    updateFields['train_id'] = data.train_id
    updateFields['station_id'] = data.station_id
    updateFields['ticket_id'] = data.ticket_id
  } else if(type === 'Tickets') {
    updateFields['id'] = data.id
    updateFields['destionation_id'] = data.destionation_id
  } else {
    updateFields['id'] = data.id
    updateFields['location'] = data.location
    updateFields['next_station_id'] = data.next_station_id
  }
  return updateFields
}

module.exports = {
  getFields
}
