module.exports = function(sequelize, DataTypes) {
    var Pupper = sequelize.define("Pupper", {
        ownerName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
      dogName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      image: {
        type: DataTypes.BLOB
      },
      size: {
        type: DataTypes.INTEGER,
        defaultValue: 1
      },
      familyFriendly: {
        type: DataTypes.INTEGER,
        defaultValue: 1
      },
      energetic: {
        type: DataTypes.INTEGER,
        defaultValue: 1
      },
      lazy: {
        type: DataTypes.INTEGER,
        defaultValue: 1
      },
      strangerDanger: {
        type: DataTypes.INTEGER,
        defaultValue: 1
      },
      dogDanger: {
        type: DataTypes.INTEGER,
        defaultValue: 1
      },
      largeDogDanger: {
        type: DataTypes.INTEGER,
        defaultValue: 1
      }, 
      smallDogDanger: {
        type: DataTypes.INTEGER,
        defaultValue: 1
      },
      dominant: {
        type: DataTypes.INTEGER,
        defaultValue: 1
      },
      doesntShare: {
        type: DataTypes.INTEGER,
        defaultValue: 1
      },
      chaser: {
        type: DataTypes.INTEGER,
        defaultValue: 1
      },
      wrestler: {
        type: DataTypes.INTEGER,
        defaultValue: 1
      },
      allDogFriendly: {
        type: DataTypes.INTEGER,
        defaultValue: 1
      }

    });

    Pupper.associate = function(models) {
      Pupper.belongsTo(models.User, {
        onDelete: "cascade"
      });
    };

    return Pupper;
    
  };


  