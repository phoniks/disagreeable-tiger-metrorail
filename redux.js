const {createStore} = require('redux')
const metrorail = require('./reducers')
let store = createStore(metrorail)
