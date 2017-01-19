module.exports = function(sequelize, DataTypes) {
  return Stations = sequelize.define('stations', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    location: {
      type: DataTypes.TEXT,
    }
  }, {
    underscored: true,
    timestamps: false,
    classMethods: {
      associate: models => {
        Stations.hasMany(models.passengers, {as: 'station'})
        Stations.belongsTo(models.stations, {as: 'nextStation'})
      }

    }
  })
}
