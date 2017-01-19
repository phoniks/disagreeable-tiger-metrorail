"use strict"

const fs        = require("fs")
const path      = require("path")
const Sequelize = require("sequelize")
const env       = process.env.NODE_ENV || "development"
const config    = require(path.join(__dirname, '..', 'config', 'config.json'))[env]

if (process.env.DATABASE_URL) {
  var sequelize = new Sequelize(process.env.DATABASE_URL,config)
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config)
}
const db = {}

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== "index.js")
  })
  .forEach(function(file) {
    console.log('FILE', file)
    var model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

Object.keys(db).forEach(function(modelName) {
  if ("associate" in db[modelName]) {
    db[modelName].associate(db)
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

db.getPassengers = options => {
  if(options.ticketId){

  }
}

db.create = options => {
  if(options.obj == 'ticket'){
    Tickets.create({destination_id: destination})
    .error( err => {
      console.error("ERROR: ", err);
    })
    .then( instance => {
      options.cb(instance.dataValues.id)
    })
  }
}

db.findAll = options => {

}
// findAll(table, whereSomething, equalsSomething)

module.exports = db
