const { createStore } = require('redux')
const {rootReducer} = require('./reducers')

let store = createStore(rootReducer)

module.exports = {
  store
}
