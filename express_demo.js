/**
 * Created by Liulin on 2017/5/11.
 */
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.sendFile('E:/test/for_self/node-server/index.html');
});

app.get('/photo', function (req, res) {
    res.sendFile('E:/test/for_self/node-server/takePhoto.html');
});


app.get('/demo', function (req, res) {
    res.sendFile('E:/test/for_self/node-server/copy-demo.html');
});


var server = app.listen(9000,'192.168.1.124', function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

});