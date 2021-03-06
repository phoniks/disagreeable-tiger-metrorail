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
    var model = sequelize.import(path.join(__dirname, file))
    db[model.name] = model
  })

db.sequelize = sequelize
db.Sequelize = Sequelize
