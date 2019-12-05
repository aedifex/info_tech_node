const express = require('express')
const bodyParser = require('body-parser')
const app = express()
// const port = 3000
const port = process.env.PORT || 3000;
const host = '0.0.0.0';

module.exports = app

// probably best to keep const values here
// const version = process.env.VERSION || "123.123";
const sha = process.env.CIRCLE_SHA1 || "abc.xyz";

// Creating a 'build' object

var buildObject = {
   CIRCLE_SHA1:"abc.xyz",
   VERSION:process.env.VERSION || "1.2.3-patch",
   CIRCLE_USERNAME: process.env.CIRCLE_USERNAME || "DefaultUser",
   Github_Repo_Name: process.env.CIRCLE_PROJECT_REPONAME || "DefaultRepo",
   Build_Number: process.env.CIRCLE_BUILD_NUM || "1",
   Workflow_Guid: process.env.CIRCLE_WORKFLOW_ID || "123abc",
   CI_PULL_REQUEST: process.env.CI_PULL_REQUEST || "Awesome Pull Request"
}

// app.locals.CIRCLE_SHA1 = "abc.xyz";
app.locals.buildObject = buildObject;


/*CI_PULL_REQUEST





CIRCLE_SHA1
VERSION - context or build param
CIRCLE_USERNAME
CIRCLE_PROJECT_REPONAME
CIRCLE_BUILD_NUM
CIRCLE_WORKFLOW_ID
CI_PULL_REQUEST
*/

// app.get('/', (req, res) => res.send('Hello World!'))

// parse the html form
// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })


app.get('/', (req, res) => res.render('staging.ejs'))

app.get('/buildInfo', (req, res) => res.render('buildInfo.ejs'))

app.get('/version', (req, res) => res.json(buildObject))



// allow us to use all static assets
app.use(express.static('public'));
// this might cause issues...
// app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs')

app.listen(port, host, () => console.log(`Example app listening on port ${port}!`))
