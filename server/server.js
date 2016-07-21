"use strict";
let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');

let port = process.env.PORT || 3000;
let app = express();

app.use('/', express.static('dist'));
app.use('/node_modules', express.static('node_modules'));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.sendFile('index.html',{ root: path.join(__dirname, '../dist') });
});

let server = app.listen(port, function () {
    let port = server.address().port;
    console.log('App is listening on port:' + port);
});