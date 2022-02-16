const fs = require('fs');
const path =process.argv[2] 
const extName =process.argv[3]  // txt
fs.readdir(path, function(err, list){
	if(err){consol.error(error)}
	else{
		for(let i = 0;i<=list.length-1; i++){
			if(fs.extName(list[i]) === '.'+ extName){
				console.log(list[i])
			}
		}
	}
})
