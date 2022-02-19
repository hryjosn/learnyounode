var net = require('net')
let port = process.argv[2]
let date = new Date();
let current_time = date.getFullYear() + "-" + 0 + (Number(date.getMonth()) + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes();
var server = net.createServer(function(socket) {
    socket.write(current_time + "\n");
    socket.end();
})
server.listen(port)

//official solution
// 'use strict'
// const net = require('net')

// function zeroFill (i) {
//     return (i < 10 ? '0' : '') + i
// }

// function now () {
//     const d = new Date()
//     return d.getFullYear() + '-' +
//     zeroFill(d.getMonth() + 1) + '-' +
//     zeroFill(d.getDate()) + ' ' +
//     zeroFill(d.getHours()) + ':' +
//     zeroFill(d.getMinutes())
// }

// const server = net.createServer(function (socket) {
//     socket.end(now() + '\n')
// })

// server.listen(Number(process.argv[2]))