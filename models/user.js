module.exports = function(sequelize, DataTypes) {

	var User = sequelize.define('User', {
		id: { autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER},
		firstname: { type: DataTypes.STRING,notEmpty: true},
		lastname: { type: DataTypes.STRING,notEmpty: true},
		email: { type: DataTypes.STRING, allowNull: false, validate: {isEmail:true} },
        password : {type: DataTypes.STRING,allowNull: false }, 
        isLoggedIn: {type: DataTypes.BOOLEAN,defaultValue: false}
});

	return User;

}