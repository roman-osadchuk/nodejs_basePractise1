const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const mydata = require('./data');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))


const port = 3000;


app.get('/', function(req, res, next) {
    res.end("Welcome to my app");
});

app.get('/scores', function(req, res, next) {
    res.json(mydata.getAllHighestScores(mydata.user_scores));
});

app.get('/scores/:user', function(req, res, next) {
    res.json(mydata.getUserHighestScore(mydata.user_scores, req.params.user));
});



// response with 404 error if url is invalid
app.use((req, res, next) => {
    res.status(404).send();
})

// starting server
http.createServer(app)
  .listen(port, () => {
    console.log(`Service was started successfully on port ${port}`);
  }).on('error', err => {
    // custom error handling to print more userfriendly error message
    // if port is already used by other app
    if (err.code === 'EADDRINUSE') {
      console.log(`Error: port address ${port} already in use`);
    } else {
      console.log(`Error: ${err.message}`);
    }
    process.exit(1);
  });