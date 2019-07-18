module.exports = function(sequelize, DataTypes) {

	var Message = sequelize.define('Message',{
        name: DataTypes.STRING,
        message: DataTypes.TEXT,
      });
      Message.associate = function(models) {
       
        Message.belongsTo(models.User, {
          foreignKey: {
            allowNull: false
          }
        });
    }
	return Message;

}