module.exports = function(sequelize, DataTypes) {
  return Tickets = sequelize.define('tickets', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    deleteme: {
      type: DataTypes.INTEGER
    }
  }, {
    underscored: true,
    timestamps: false,
    classMethods: {
      associate: models => {
        Tickets.hasOne(Passengers, {as: 'ticket', constraints: false})
        Tickets.belongsTo(Stations, {as: 'destination', constraints: false})
      }
    }
  })
}
