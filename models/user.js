module.exports = function(sequelize, DataTypes) {

	var User = sequelize.define('User', {
		id: { autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER},
		firstname: { type: DataTypes.STRING,notEmpty: true},
		lastname: { type: DataTypes.STRING,notEmpty: true},
		email: { type: DataTypes.STRING, allowNull: false, validate: {isEmail:true} },
        password : {type: DataTypes.STRING,allowNull: false }, 
        isLoggedIn: {type: DataTypes.BOOLEAN,defaultValue: false}
});

User.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    User.hasMany(models.Message, {
      onDelete: "cascade"
    });
  };


	return User;

}