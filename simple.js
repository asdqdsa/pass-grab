var fs = require('fs');
const stdout = 122;

fs.writeFile('newFile1',`${stdout}`,function(err) {
	if (err) throw err;
	console.log('file is created successfully');
});
console.log('hi');
