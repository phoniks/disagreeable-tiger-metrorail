function trainReducer(state, action){
  switch (action.type) {
    case 'CREATE_TRAIN':
      return Object.assign({}, state, {
        Trains: action.train
      })
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
  }
}

module.exports = {
  trainReducer
}
