var express = require("express");
var app = express();

var mysql = require('mysql');


var connection = mysql.createConnection({
    host     : 'aa1tl0a0trwpa2k.cicqvgam2cqn.us-west-2.rds.amazonaws.com',
    port      :  3306,
    user     : 'awsroot',
    password : 'awsrootpass',
    database : 'aa1tl0a0trwpa2k'

});

app.listen(3000, () => {
    console.log("Server running on port 3000");

    //Connection Sample
    connection.connect(function(err) {
        if (err) {
            console.error('Database connection failed: ' + err.stack);
            return;
        }

        console.log('Connected to database.');
    });

    connection.end();

});

app.get("/", (req, res, next) => {
  console.log("Got a request on /");
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});