var expect  = require('chai').expect;
var request = require('request');

// We'll run two files, with two tests each
// primary tests will test the primary endpoints
// and routes.

const port = process.env.PORT || 3000;

console.log("Greeting from: " + (process.env.CIRCLE_JOB || null) + "running on Node index: " + (process.env.CIRCLE_NODE_INDEX || null))

describe('Status and content', function() {
    describe ('Main page', function() {
        it('status', function(done){
            request(`http://localhost:${port}/`, function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

        it('content / html', function(done) {
            request('http://localhost:${port}/' , function(error, response, body) {
                expect(response.body).to.equal('Hello World');
                done();
            });
        });
    });

    describe ('About page', function() {
        it('status', function(done){
            request('http://localhost:${port}/', function(error, response, body) {
                expect(response.statusCode).to.equal(404);
                done();
            });
        });

    });
});

/*
it('Main page status', function(done) {
    request(`http://localhost:${port}` , function(error, response, body) {
    	  console.log(response)
        expect(response.statusCode).to.equal(200);
        done();
    });
});

it('Main page response body', function(done) {
    request(`http://localhost:${port}` , function(error, response, body) {
        // console.log(response)
        expect(response.statusCode).to.equal(200);
        done();
    });
});
*/
// expect(response.statusCode).to.equal(404)

console.log('Port:' , port)