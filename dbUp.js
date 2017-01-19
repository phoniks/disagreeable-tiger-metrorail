'use strict'

var Sequelize = require('sequelize')
var sequelize = new Sequelize('metrorail', null, null, {
      dialect: "postgres",
      port: 5432,
    })

sequelize
  .authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.')
  }, function (err) {
    console.log('Unable to connect to the database:', err)
  })

const Trains = sequelize.define('trains', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false
  },
  capacity: {
    type: Sequelize.INTEGER,
  }
}, {
  underscored: true,
  timestamps: false
})

const Passengers = sequelize.define('passengers', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false
  },
  name: {
    type: Sequelize.TEXT,
  }
}, {
  underscored: true,
  timestamps: false
})

const Tickets = sequelize.define('tickets', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false
  }
}, {
  underscored: true,
  timestamps: false
})

const Stations = sequelize.define('stations', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false
  },
  location: {
    type: Sequelize.TEXT,
  }
}, {
  underscored: true,
  timestamps: false
})

// Tickets.hasOne(Passengers, {as: 'ticket', constraints: false})
// Stations.hasMany(Passengers, {as: 'station'})
// Trains.hasMany(Passengers, {as: 'train'})
// Tickets.belongsTo(Stations, {as: 'destination', constraints: false})
// Trains.belongsTo(Stations, {as: 'station'})
// Stations.belongsTo(Stations, {as: 'nextStation'})

sequelize.sync({force: true}).then( _ => {
  console.log('Done sync\'ing')
})

module.exports = {
  Tickets, Stations, Trains, Passengers
}
