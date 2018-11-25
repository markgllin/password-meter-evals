/**
 * Evaluate the strength of a user's password.
 *
 * Returns the estimated strength and the relevant output message.
 */
var PasswordTester = {
  main: function (password) {
    password = password.trim();

    var weaknesses = 0, strength = 100, msg = [];

    var hasLowercase = /[a-z]+/.test(password);
    var hasUppercase = /[A-Z]+/.test(password);
    var hasNumbers = /[0-9]+/.test(password);
    var hasPunctuation = /[^a-zA-Z0-9]+/.test(password);

    // If there is a username edit box on the page, compare password to that, otherwise
    // use value from the database.
    // var usernameBox = $('input.username');
    // var username = (usernameBox.length > 0) ? usernameBox.val() : translate.username;

    // Lose 5 points for every character less than 6, plus a 30 point penalty.
    if (password.length < 6) {
      msg.push("Too Short");
      strength -= ((6 - password.length) * 5) + 30;
    }

    // Count weaknesses.
    if (!hasLowercase) {
      msg.push("Missing lowercase character");
      weaknesses++;
    }
    if (!hasUppercase) {
      msg.push("Missing uppercase character");
      weaknesses++;
    }
    if (!hasNumbers) {
      msg.push("Missing numbers");
      weaknesses++;
    }
    if (!hasPunctuation) {
      msg.push('Needs punctuation');
      weaknesses++;
    }

    // Apply penalty for each weakness (balanced against length penalty).
    switch (weaknesses) {
      case 1:
        strength -= 12.5;
        break;

      case 2:
        strength -= 25;
        break;

      case 3:
        strength -= 40;
        break;

      case 4:
        strength -= 40;
        break;
    }

    // // Check if password is the same as the username.
    // if (password !== '' && password.toLowerCase() === username.toLowerCase()) {
    //   msg.push("Same as username");
    //   // Passwords the same as username are always very weak.
    //   strength = 5;
    // }

    // Based on the strength, work out what text should be shown by the password strength meter.
    if (strength < 60) {
      indicatorText = "weak";
    } else if (strength < 70) {
      indicatorText = "fair";
    } else if (strength < 80) {
      indicatorText = "good";
    } else if (strength <= 100) {
      indicatorText = "strong";
    }

    // Assemble the final message.
    console.log(password + ', ' + strength + ', ' + indicatorText)

  }
}

var fs = require('fs'),
  path = require('path'),
  filePath = path.join(__dirname, ARGV[0]);

fs.readFile(filePath, {
  encoding: 'utf-8'
}, function (err, data) {
  if (!err) {
    var pws = data.split("\n");
    for (var i = 0; i < pws.length; i++) {
      PasswordTester.main(pws[i]);
    }
  } else {
    console.log(err);
  }
});