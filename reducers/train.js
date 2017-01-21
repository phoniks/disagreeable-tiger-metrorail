function Trains(state={}, action){
  switch (action.type) {
    case 'CREATE_TRAIN':
      let sample = Object.assign({}, state, action.Trains)
      console.log('STATE', state)
      console.log('ACTION.TRAIN', action.Trains)
      console.log('SAMPLE', sample)
      return sample
      break;
    case 'OFFBOARD_TRAIN':

      break;
    case 'ONBOARD_TRAIN':

      break;
    case 'CHANGESTATION_TRAIN':

      break;
    case 'DELETE_TRAIN':

      break;
    default:
      return state
      break;
  }
}

module.exports = {
  Trains
}
