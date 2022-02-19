const http = require('http');
const concat = require('concat-stream');
const url = process.argv[2];
//Solution 1
http.get(url, (res) => {
    res.pipe(concat(data=>{
    	console.log(data.length)
    	console.log(data.toString())
    }));
})

//Solution 2
// http.get(url, (res) => {
//     let data = '';
//     res.on("data", (chunk) => {
//         data += chunk;
//     }).setEncoding('utf-8')
//     res.on("end",  () => {
//         console.log(data.length);
//         console.log(data);
//       })
// })