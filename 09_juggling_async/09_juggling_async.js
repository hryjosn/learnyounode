const http = require('http');
const concat = require('concat-stream');
const url_1 = process.argv[2];
const url_2 = process.argv[3];
const url_3 = process.argv[4];
//callback hell
// http.get(url_1,(res)=>{
// 	res.pipe(concat((data)=>{ 
// 		console.log(data.toString())
// 		http.get(url_2,(res)=>{
// 			res.pipe(concat((data)=>{ 
// 				console.log(data.toString())
// 				http.get(url_3,(res)=>{
// 					res.pipe(concat((data)=>{ 
// 						console.log(data.toString())
// 					}))
// 				})
// 			}))
// 		})
// 	}))
// })

//ES6 solution
// function toGet(url) {
// 	return new Promise ((resolve, reject) => {
// 	  let req = http.get(url);
  
// 	  req.on('response', res => {
// 		resolve(res);
// 	  });
  
// 	  req.on('error', err => {
// 		reject(err);
// 	  });
// 	}); 
//   }
//    async function doit(){
// 	for(i=2; i < process.argv.length; i++){
// 		const res = await toGet(process.argv[i])
// 		res.setEncoding('utf8')
// 		res.pipe(concat((data)=>{ 
// 			console.log(data)
// 		}))
// 	}
//   }
//   doit()

// official solution
// 'use strict'
// const http = require('http')
// const bl = require('bl')
// const results = []
// let count = 0

// function printResults () {
//   for (let i = 0; i < 3; i++) {
// 	console.log(results[i])
//   }
// }

// function httpGet (index) {
//   http.get(process.argv[2 + index], function (response) {
// 	response.pipe(bl(function (err, data) {
// 	  if (err) {
// 		return console.error(err)
// 	  }

// 	  results[index] = data.toString()
// 	  count++

// 	  if (count === 3) {
// 		printResults()
// 	  }
// 	}))
//   })
// }

// for (let i = 0; i < 3; i++) {
//   httpGet(i)
// }