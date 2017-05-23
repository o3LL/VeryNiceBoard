
var express = require('express');
var app = express();
var cors = require('cors');
const fs = require('fs');
var path = require('path');

app.use(cors());

app.get('/api/list/:path', function (req, res) {
    fs.readdir('client/' + req.params.path, function(err, files){
        res.send(parse(files));
    });
});

function parse(files) {
    var arr = [];
    for (var i = 0; i < files.length; ++i){
        arr.push({file: files[i], name: path.parse(files[i]).name});
    }
    return arr;
}

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
