const { createStore } = require('redux')
const {trainReducer} = require('./reducers')

let store = createStore(trainReducer)

module.exports = {
  store
}
