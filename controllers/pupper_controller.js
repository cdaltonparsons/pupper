var exports = module.exports = {}

// This will be the signup route for new users, signup.handelbars came from the tutorial I worked on, but we can make this whatever we want.  The other routes are for signing in for returning users, and the 'dashboard' page is effectively the main page that houses al the content.  That would be the only one i was thinking we would want to "protect", and require authentication for, but we can also protect several pages if that's better
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