const http = require('http');
const concat = require('concat-stream');
const url_1 = process.argv[2];
const url_2 = process.argv[3];
const url_3 = process.argv[4];
http.get(url_1,(res)=>{
	res.pipe(concat((data)=>{ 
		console.log(data.toString())
		http.get(url_2,(res)=>{
			res.pipe(concat((data)=>{ 
				console.log(data.toString())
				http.get(url_3,(res)=>{
					res.pipe(concat((data)=>{ 
						console.log(data.toString())
					}))
				})
			}))
		})
	}))
})