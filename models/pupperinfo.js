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
      q1: {
        type: DataTypes.INTEGER,
        defaultValue: 1
      },
      q2: {
        type: DataTypes.INTEGER,
        defaultValue: 1
      },
      q3: {
        type: DataTypes.INTEGER,
        defaultValue: 1
      },
      q4: {
        type: DataTypes.INTEGER,
        defaultValue: 1
      },
      q5: {
        type: DataTypes.INTEGER,
        defaultValue: 1
      },
      q6: {
        type: DataTypes.INTEGER,
        defaultValue: 1
      },
      q7: {
        type: DataTypes.INTEGER,
        defaultValue: 1
      }, 
      q8: {
        type: DataTypes.INTEGER,
        defaultValue: 1
      },
      q9: {
        type: DataTypes.INTEGER,
        defaultValue: 1
      },
      q10: {
        type: DataTypes.INTEGER,
        defaultValue: 1
      },
      q11: {
        type: DataTypes.INTEGER,
        defaultValue: 1
      },
      q12: {
        type: DataTypes.INTEGER,
        defaultValue: 1
      },
      q13: {
        type: DataTypes.INTEGER,
        defaultValue: 1
      }

    });
    return Pupper;
  };
  