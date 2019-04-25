const myModule = require('./mymodule');
const dir = process.argv[2];
const ext = process.argv[3];
myModule(dir, ext, function(err, list){
	if(err) console.err(err);
	list.map(file=>{ console.log(file) })
})