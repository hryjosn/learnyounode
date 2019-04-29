  // let http = require('http');
  // let port = process.argv[2];
  // var map = require('through2-map');
  // http.createServer((req, res) => {
  //     if (req.method === 'post') {
  //         // res.writeHead(200, {
  //         //     'content-type': 'text/plain'
  //         // })
  //         req.pipe(map(chunk => chunk.toString().toUpperCase())).pipe(res)
  //         req.pipe(map((chunk) => chunk.toString().toUpperCase())).pipe(res)
  //     }

  // }).listen(+port)

let http = require('http');
let port = process.argv[2];
var map = require('through2-map');
http.createServer((req, res) => {
    // if (req.method != 'POST')
    //     return res.end('send me a POST\n')
    if (req.method === 'post') req.pipe(map((chunk) => chunk.toString().toUpperCase())).pipe(res)
}).listen(Number(port))