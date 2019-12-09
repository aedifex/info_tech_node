const express = require('express')
const bodyParser = require('body-parser')
const app = express()
// const port = 3000
const port = process.env.PORT || 3000;
const host = '0.0.0.0';

// shenanigans
// require('dotenv').load();

module.exports = app

// probably best to keep const values here
// const version = process.env.VERSION || "123.123";
const sha = process.env.CIRCLE_SHA1 || "abc.xyz";

const buildURL = process.env.CIRCLE_BUILD_URL || "Local Build";

var circleUser = process.env.CIRCLE_USERNAME;

console.log("CircleUser: " + circleUser);

// Creating a 'build' object

var buildObject = {
   buildCommit: sha,
   VERSION: process.env.VERSION || "1.2.3-patch",
   CIRCLE_USERNAME: circleUser,	
   Github_Repo_Name: process.env.CIRCLE_PROJECT_REPONAME || "DefaultRepo",
   Build_Number: process.env.CIRCLE_BUILD_NUM || "1",
   Workflow_Guid: process.env.CIRCLE_WORKFLOW_ID || "123abc",
   CI_PULL_REQUEST: process.env.CI_PULL_REQUEST || "Awesome Pull Request"
}

// app.locals.CIRCLE_SHA1 = "abc.xyz";
// another way to pass in vars to app
app.locals.buildObject = buildObject;
app.locals.buildURL = buildURL;


// parse the html form
// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })


app.get('/', (req, res) => res.render('index.ejs'))

app.get('/buildInfo', (req, res) => res.render('buildInfo.ejs'))

app.get('/version', (req, res) => res.json(buildObject))

// allow us to use all static assets
app.use(express.static('public'));
// this might cause issues...
// app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs')

app.listen(port, host, () => console.log(`Example app listening on port ${port}!`))
