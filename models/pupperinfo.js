module.exports = function(sequelize, DataTypes) {
    var Pupper = sequelize.define("Pupper", {
        ownerName: {
            type: DataTypes.String,
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
      Q1: {
        type: DataTypes.INTEGER,
        defaultValue: 1
      },
      Q2: {
        type: DataTypes.INTEGER,
        defaultValue: 1
      },
      Q3: {
        type: DataTypes.INTEGER,
        defaultValue: 1
      },
      Q4: {
        type: DataTypes.INTEGER,
        defaultValue: 1
      },
      Q5: {
        type: DataTypes.INTEGER,
        defaultValue: 1
      },
      Q6: {
        type: DataTypes.INTEGER,
        defaultValue: 1
      },
      Q7: {
        type: DataTypes.INTEGER,
        defaultValue: 1
      }, 
      Q8: {
        type: DataTypes.INTEGER,
        defaultValue: 1
      },
      Q9: {
        type: DataTypes.INTEGER,
        defaultValue: 1
      },
      Q10: {
        type: DataTypes.INTEGER,
        defaultValue: 1
      },
      Q11: {
        type: DataTypes.INTEGER,
        defaultValue: 1
      },
      Q12: {
        type: DataTypes.INTEGER,
        defaultValue: 1
      },
      Q13: {
        type: DataTypes.INTEGER,
        defaultValue: 1
      }

    });
    return Pupper;
  };
  