module.exports = function(sequelize, DataTypes) {
  return Trains = sequelize.define('trains', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    capacity: {
      type: DataTypes.INTEGER,
    }
  }, {
    underscored: true,
    timestamps: false,
    classMethods: {
      associate: models => {
        return Promise.all([
          Trains.hasMany(models.Passengers, {as: 'train'}),
          Trains.belongsTo(models.Stations, {as: 'station'})
        ])
      }
    }
  })
}
