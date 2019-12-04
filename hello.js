var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})

// adding a version endpoint
app.get('/version', function (req, res) {
   response = { version:version, SHA:sha }
   // console.log(JSON.stringify(response));
   // res.json({ status: "success", message: "Welcome To Testing API" });
   res.json({ version:version, SHA:sha });
   // res.end(JSON.stringify(response));
})

app.get('/formSubmit', function (req, res) {
	response = { email:req.query.email };
	console.log(JSON.stringify(response));
	res.render('staging.ejs');
})

app.post('/process_post', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
   response = {
      //first_name:req.body.first_name,
      //last_name:req.body.last_name
      email:req.body.email
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

// Simple - html forum using GET requests
app.get('/process_get', function (req, res) {
   // Prepare output in JSON format
   response = {
      first_name:req.query.first_name,
      last_name:req.query.last_name
   };
   console.log(JSON.stringify(response));
   res.end(JSON.stringify(response));
})