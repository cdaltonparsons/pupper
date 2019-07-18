module.exports = function (sequelize, DataTypes) {
    var Match = sequelize.define("Match", {
        size: {
            type: DataTypes.STRING,
            defaultValue: "Small"
        },
        energetic: {
            type: DataTypes.STRING,
            defaultValue: "Yes"
        },
        dominant: {
            type: DataTypes.STRING,
            defaultValue: "Yes"
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