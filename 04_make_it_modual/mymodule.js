const fs = require('fs');
const path = require('path')
const func = (dir, ext, callback) => {
    fs.readdir(dir, function(err, list) {
        if (err) return callback(err);
        list = list.filter(file => path.extname(file) === '.' + ext);
        callback(null, list)
    });

}
module.exports = func;