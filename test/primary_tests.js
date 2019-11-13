var expect  = require('chai').expect;
var request = require('request');

// We'll run two files, with two tests each
// primary tests will test the primary endpoints
// and routes.

const port = process.env.PORT || 3000;

it('Main page status', function(done) {
    request(`http://localhost:${port}` , function(error, response, body) {
    	// console.log(body)
        expect(response.statusCode).to.equal(200);
        done();
    });
});

console.log('Port:' , port)