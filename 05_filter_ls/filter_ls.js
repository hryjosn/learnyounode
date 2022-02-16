const fs = require('fs');
const path = '/Users/caiweizheng/StudentHW/learnyounode/My_Folder'
const extName = process.argv[3]

fs.readdir(path,function(err,list){
    if (err){console.error(err)}
    else {
        for (let i = 0; i <= list.length-1; i++){ 
            if (path.extname(list[i]) === '.' + extName){
                console.log(list[i]);
            }
        }
    }
})