'use strict';

const express = require('express')
const bodyParser = require('body-parser')
const path = require('path');
const fs = require('fs');

const app = express();



app.enable('trust proxy');

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.use(express.static('html'))

app.get("/", function (req, res, next) {


    fs.readFile('./index.html', function (err, data) {
        res.status(200).send(data);
    });
});



const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});
