var http = require('http');

var IMGCODE = require('./index');
var imgcode = new IMGCODE();

http.createServer(function (request, response) {

    if(request.url == '/favicon.ico')return response.end('');//Intercept request favicon.ico

    var obj = imgcode.get();
    var key = obj.key;
    var txt = obj.txt;

    var buf = obj.buf;

    response.end(buf);

    console.log(txt);
    console.log(key);

}).listen(8124);

console.log('Server running at http://127.0.0.1:8124/');
