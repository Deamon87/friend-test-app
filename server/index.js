var express = require('express');
var path = require('path');
var session = require('express-session');
var friendListCreator = require(friendListCreator);
var app = express();

var friendsList = friendListCreator();

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
app.use(session({
    secret: 'secret-some',
    cookie: {maxAge: 60000},
    resave: false,
    saveUninitialized: true
}))

function checkUser(req, res, next) {
    if (!req.session.isLogged) {
        res.status(403).send('Not authorized');
    } else {
        next();
    }
}

var router = express.Router();
router.post("/login", function(req, res) {
    //login endpoint called
    req.session.isLogged = true;
    res.send({login: "ok"});
});

router.get("/logout", function(req, res) {
    //login endpoint called
    req.session.isLogged = false;
    res.send({login: "loggedout"});
});


router.get("/friends", checkUser, function (req, res) {

});

app.use('/api', router);


app.listen(8080, function () {
    console.log('Server started at port 8080!');
});