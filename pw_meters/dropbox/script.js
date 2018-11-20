var readline = require('readline');
var fs = require('fs');
var zxc = require('./zxcvbn');

var myInterface = readline.createInterface({
  input: fs.createReadStream('all_passwords.txt')
});
var resultFile = fs.createWriteStream('dropbox_results.txt')

var lineno = 0;
var result;
myInterface.on('line', function (line) {
	result = zxc.zxcvbn(line, null);
	resultFile.write(line + ', ' + result.score + '\n');
	lineno++;
	console.log('Line number ' + lineno + ': ' + line + ', ' + result.score);
});




