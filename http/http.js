var http = require('http');
var url = require('url');

http.createServer(function (req,res) {
    res.writeHead(200,{"Content-Type":"text/html;charset='utf-8'"});
    if (req.url !='/favicon.ico') {

        console.log(req.url);
        var  result = url.parse(req.url,true);
        console.log(result.query.aid);
    }
    res.write('你好 node.js');
    res.write('我是第一个node.jd 程序');
    res.end();
}).listen('8001');