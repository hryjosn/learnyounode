const fs = require('fs');
const path = require('path');
const folderPath = process.argv[2]
const extName = process.argv[3]

fs.readdir(folderPath, function(err, list){
    if (err){
        console.error(err)
    }else {
        for (let i = 0; i <= list.length-1; i++){ 
            if (path.extname(list[i]) === '.' + extName){
                console.log(list[i]);
            }
        }
    }
})

