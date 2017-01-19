module.exports = function(sequelize, DataTypes) {
  return Tickets = sequelize.define('tickets', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    d: {
      type: DataTypes.INTEGER
    }
  }, {
    underscored: true,
    timestamps: false,
    classMethods: {
      associate: models => {
        Tickets.hasOne(models.passengers, {as: 'ticket', constraints: false})
        Tickets.belongsTo(models.stations, {as: 'destination', constraints: false})
      }
    }
  })
}
