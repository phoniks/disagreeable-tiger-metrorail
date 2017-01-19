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
        Trains.hasMany(Passengers, {as: 'train'})
        Trains.belongsTo(Stations, {as: 'station'})
      }
    }
  })
}
