var express = require('express');
var path = require('path');
var app = express();

//Serve static files
app.use('/static', express.static(path.join(__dirname, 'static')));

//Check url for api
app.use(function(req, res, next) {
    if (!req.url.match(/\/api\/*/g)) {
        res.sendFile(path.join(__dirname, 'static/index.html'));
    } else {
        next();
    }
});

//Router for API
var router = express.Router();
router.post("/login", function(req, res) {
    //login endpoint called
    res.send({login: "ok"});
});

app.use('/api', router);


app.listen(8080, function () {
    console.log('Server started at port 8080!');
});