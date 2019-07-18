$(document).ready(function(){
    $(document).ready(function() {
        // Getting references to our form and input
        var signUpForm = $("form.signup");
        var emailInput = $("input#email-input");
        var passwordInput = $("input#password-input");
        var firstName = $("input#first-name-input");
        var lastName = $("input#last-name-nput");
      
        // When the signup button is clicked, we validate the email and password are not blank
        signUpForm.on("submit", function(event) {
          event.preventDefault();
          var userData = {
            email: emailInput.val().trim(),
            password: passwordInput.val().trim(),
            firstName: firstName.val().trim(),
            lastName: lastName.val().trim()
          };
      
          if (!userData.email || !userData.password) {
            return;
          }
          // If we have an email and password, run the signUpUser function
          signUpUser(userData.email, userData.password, userData.firstName, userData.lastName);
          emailInput.val("");
          passwordInput.val("");
        });
      
        // Does a post to the signup route. If successful, we are redirected to the members page
        // Otherwise we log any errors
        function signUpUser(email, password, firstName, lastName) {
          $.post("/signup", {
            email: email,
            password: password,
            firstName: firstName,
            lastName: lastName
          }).then(function(data) {
            console.log(data);
            
            // If there's an error, handle it by throwing up a bootstrap alert
          }).catch(handleLoginErr);
        }
})