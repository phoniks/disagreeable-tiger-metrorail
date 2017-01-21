const {Trains} = require('./train')
const { combineReducers } = require('redux')

const rootReducer = combineReducers({
  Trains
})

module.exports = {
  rootReducer
}
