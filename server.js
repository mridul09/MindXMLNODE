const express = require('express');
const bodyParser = require('body-parser');
const xmlparser = require('express-xml-bodyparser');

// create express app
const app = express();

//xml parser
app.use(xmlparser());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a simple route
app.get('/api/data', (req, res) => {
    
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});

app.post('/test',function(req, res, next) {
    res.status(200).send({result: "OK"})
});

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});