const fs = require('fs');
const argv = process.argv[2]
fs.readFile(argv, 'utf-8', function callback(err, data){
	if(err) console.err(err);
	console.log(data.split('\n').lengh);
})
