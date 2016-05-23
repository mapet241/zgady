var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/zgady');

var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(__dirname + '/public'));

var userRouter = require('./backend/routes/userRouter.js');
var questionRouter = require('./backend/routes/questionRouter');

app.use('/api/users', userRouter);
app.use('/api/questions', questionRouter);

app.get('/', function (req, res) {
    res.sendfile('./public/index.html');
});

app.listen(3000, function () {
    console.log('Zgady słuchają na porcie 3000');
});