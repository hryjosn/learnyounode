const fs = require('fs');
const path =process.argv[2] 
function callback(err, data){
    if(err) console.log("HEEEEEEEENRYR",err)
    console.log(data.split('\n').length-1)
}
fs.readFile('./werwerqwe.js','utf8' ,callback);



// callback function //回呼函示

