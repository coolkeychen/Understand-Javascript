'use strict';

var fs = require('fs');

var data = fs.statSync('sample.txt');

if (data.isFile()) {
    // 文件大小:
    console.log('size: ' + data.size);
    // 创建时间, Date对象:
    console.log('birth time: ' + data.birthtime);
    // 修改时间, Date对象:
    console.log('modified time: ' + data.mtime);
}
