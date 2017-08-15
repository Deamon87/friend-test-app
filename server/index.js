var express = require('express');
var path = require('path');
var app = express();

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'static/index.html'));
});

// serve static files
app.use('/static', express.static(path.join(__dirname, 'static')));

app.listen(8080, function () {
    console.log('Server started at port 8080!');
});