const fs = require('fs')
const path = require('path')
function result(pathName, extFile, callback) {
    fs.readdir(pathName, function (err, data) {
        if (err) { return callback(err) }
        const list = [];
        for (let i = 0; i < data.length; i++) {
            if (path.extname(data[i]) === "." + extFile) {
                list.push(data[i])
            }
        }
        callback(null, list)
    })
}
module.exports = result