const myModule = require('./mymodule');
const dir = process.argv[2];
const ext = process.argv[3];
myModule(dir, ext, function(err, list){
	if(err) console.err(err);
	for(let i = 0; i<=list.length -1; i++){
		console.log(list[i])
	}
})