module.exports = function(sequelize, DataTypes) {
  return Passengers = sequelize.define('passengers', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    name: {
      type: DataTypes.TEXT,
    }
  }, {
    underscored: true,
    timestamps: false,
    classMethods: {
      associate: models => {}
    }
  })
}
