var exports = module.exports = {}
// these are the res.renders for our sign up, sign in and then the protected page, called here dashboard
exports.signup = function(req,res){

	res.render('signup'); 
}

exports.signin = function(req,res){

	res.render('signin'); 
}

exports.dashboard = function(req,res){
	res.render('dashboard'); 
}

exports.logout = function(req,res){
  req.session.destroy(function(err) {
  res.redirect('/');
  });

}