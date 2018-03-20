'use strict';

var fs = require('fs');

fs.stat('sample.txt',function (err,stat) {
    if (err) {
        console.log(err);
    } else {
        console.log('isFile: '+stat.isFile());
        console.log('isDirectory: '+stat.isDirectory());
        if (stat.isFile()) {
            console.log('size: '+ stat.size);
            console.log('creat Time: '+ stat.birthtime);
            console.log('modified Time: '+ stat.mtime);

        }
    }
});