module.exports = function (sequelize, DataTypes) {
    var Match = sequelize.define("Match", {
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
            type: DataTypes.BLOB,
        },
        size: {
            type: DataTypes.INTEGER,
            defaultValue: 1
        },
        energy: {
            type: DataTypes.INTEGER,
            defaultValue: 1
        },
        dominant: {
            type: DataTypes.INTEGER,
            defaultValue: 1
        }
    });
    return Match;
};