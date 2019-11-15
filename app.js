const express = require('express')
const bodyParser = require('body-parser')
const app = express()
// const port = 3000
const port = process.env.PORT || 3000;
const host = '0.0.0.0';

module.exports = app

// probably best to keep const values here
const version = process.env.VERSION || "123.123";
const sha = process.env.SHA || "abc.xyz";

// app.get('/', (req, res) => res.send('Hello World!'))

// parse the html form
// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// app.get('/', (req, res) => res.render('example'))

app.get('/', (req, res) => res.render('staging.ejs'))

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

// allow us to use all static assets
app.use(express.static('public'));
// this might cause issues...
// app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs')

app.listen(port, host, () => console.log(`Example app listening on port ${port}!`))
