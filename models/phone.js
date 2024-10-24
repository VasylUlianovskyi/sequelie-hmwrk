'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Phone extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate (models) {
      Phone.hasMany(models.Preorder, {
        foreignKey: 'phoneId',
        as: 'preorders',
      });
    }
  }
  Phone.init(
    {
      brand: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [2, 50],
        },
      },
      model: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [2, 50],
        },
      },
      os: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isIn: [['Android', 'iOS', 'Windows', 'Other']],
        },
      },
      screen_size: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          min: 3.0,
          max: 7.0,
        },
      },
      ram: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
          max: 32,
        },
      },
      storage_capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 8,
          max: 1024,
        },
      },
      battery_capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          min: 1000,
          max: 10000,
        },
      },
      camera_megapixels: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          min: 1.0,
          max: 108.0,
        },
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          min: 50.0,
        },
      },
      release_date: {
        type: DataTypes.DATE,
        allowNull: true,
        validate: {
          isDate: true,
        },
      },
      color: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      is_dual_sim: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: 'Phone',
    }
  );
  return Phone;
};
