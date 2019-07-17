module.exports = function (sequelize, DataTypes) {
    var Match = sequelize.define("Match", {
        size: {
            type: DataTypes.INTEGER,
            defaultValue: 1
        },
        energetic: {
            type: DataTypes.INTEGER,
            defaultValue: 1
        },
        dominant: {
            type: DataTypes.INTEGER,
            defaultValue: 1
        }
    });

    Match.associate = function(models) {
        Match.belongsTo(models.Pupper, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Match;

};