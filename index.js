var express = require('express'),
    http = require('http'),
    app = express();

var config = {
    proxyHost: 'atlas.metabroadcast.com',
}

var port = 9090;

app.use( '/4', function(request, response, next) {
    var data = ''

    var method = request.method;

    var proxyOpts = {
        host: config.proxyHost,
        port: 80,
        path: '/4'+request.path,
        method: method
    }
    var req = http.request(proxyOpts, function(res) {
        res.setEncoding('utf8')
        response.header('Access-Control-Allow-Origin', '*');
        response.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        response.header('Access-Control-Allow-Headers', 'Content-Type');
        response.header('content-type', res.headers['content-type']);
        response.header('content-length', res.headers['content-length']);
        res.on('data', function(chunk) {
            data += chunk;
        })
        .on('end', function() {
            response.end(data);
        });
    });

    req.end();
});

app.listen(port);
console.log('lisnin at '+port);
