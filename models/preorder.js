'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Preorder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      Preorder.belongsTo(models.Phone, {
        foreignKey: 'phoneId',
        as: 'phone',
      });
    }
  }
  Preorder.init(
    {
      phoneId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Phones',
          key: 'id',
        },
      },
      customerName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      customerPhone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM('pending', 'confirmed', 'done'),
        allowNull: false,
        defaultValue: 'pending',
      },
    },
    {
      sequelize,
      modelName: 'Preorder',
    }
  );
  return Preorder;
};
