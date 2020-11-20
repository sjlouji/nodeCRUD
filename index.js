var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var cors = require('cors')

//Database
const { Client } = require('pg');
var connectionString = "postgres://postgres:admin@localhost:5432/wish";
const client = new Client({
    connectionString: connectionString
});
client.connect();

//Body parser
app.use(bodyParser.json());
app.use(cors()) 

//Controller Starts
  //fetches data from the server
  app.get('/', function (req, res, next) {
    client.query('SELECT * FROM Patients', function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.status(200).send(result.rows);
    });
  });
  //Inserts data into the server
  app.post('/patients/add', function (req, res, next) {
    const { first_name, last_name, email, address, reason } = req.body;
    var queryString = "INSERT INTO Patients (first_name, last_name, email, address, reason) VALUES (" + "'" + [first_name,last_name,email, address, reason].join("','") + "'" + ") RETURNING *";
    client.query(queryString, function (err, result) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.status(200).send(result.rows);
    });
  });
//Controller Ends


//Server
app.listen(8000, function () {
  console.log('Listening to Port 8000');
});