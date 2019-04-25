var net = require('net')
let port = process.argv[2]
let date = new Date();
let current_time = date.getFullYear() + "-" + 0 + (Number(date.getMonth()) + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes();
var server = net.createServer(function(socket) {
    socket.write(current_time+'\n');
    socket.end();
})
server.listen(port)