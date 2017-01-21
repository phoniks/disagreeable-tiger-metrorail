function createTrain(trains){
  console.log('TRAINS ACTION', trains)

  return {
    type: 'CREATE_TRAIN',
    trains
  }
}


// train(state, {type: 'CREATE_TRAIN', train: newTrains})

module.exports = {
  createTrain
}
