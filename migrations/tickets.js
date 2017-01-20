module.exports = function(sequelize, DataTypes) {
  return Tickets = sequelize.define('tickets', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    }
  }, {
    underscored: true,
    timestamps: false,
    classMethods: {
      associate: models => {
        return Promise.all([
          Tickets.hasOne(models.Passengers, {as: 'ticket'}),
          Tickets.belongsTo(models.Stations, {as: 'destination'})
        ])
      }
    }
  })
}
