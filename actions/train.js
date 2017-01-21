function createTrain(Trains){
  console.log('TRAINS ACTION', Trains)

  return {
    type: 'CREATE_TRAIN',
    Trains
  }
}


// train(state, {type: 'CREATE_TRAIN', train: newTrains})

module.exports = {
  createTrain
}
