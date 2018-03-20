'use strict';

var fs = require('fs');

fs.readFile('111.png',function (err,data) {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
        console.log(data.length + ' bytes');
        var text = data.toString('utf-8');
        var buf = Buffer.from(text,'utf-8');
        console.log(buf);
    }
})