'use strict';
const nodestatic = require('node-static');
const views = new nodestatic.Server('./views');

require('http').createServer(function (request, response) {
        request.addListener('end', function () {
            views.serve(request, response);
        }).resume();
}).listen(process.env.PORT || 3000);