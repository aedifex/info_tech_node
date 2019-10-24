var expect  = require('chai').expect;
var request = require('request');

// We'll run two files, with two tests each
// primary tests will test the primary endpoints
// and routes.

let port = 3000

/*



describe('Status and content', function() {
    describe ('Main page', function() {
        it('status', function(done){
            request('http://localhost:8080/', function(error, response, body) {
                expect(response.statusCode).to.equal(200);
                done();
            });
        });

        it('content', function(done) {
            request('http://localhost:8080/' , function(error, response, body) {
                expect(body).to.equal('Hello World');
                done();
            });
        });
    });

    describe ('About page', function() {
        it('status', function(done){
            request('http://localhost:8080/about', function(error, response, body) {
                expect(response.statusCode).to.equal(404);
                done();
            });
        });

    });
});

*/

it('Main page status', function(done) {
    request(`http://localhost:${port}` , function(error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
    });
});

it('Main page content', function(done) {
    request(`http://localhost:${port}` , function(error, response, body) {
        // expect(body).to.equal('learn-more');
        expect(document.querySelector('h1')).should.have.text('My Home Page');
        //console.log('Error:' , error)
        //console.log('Status Code:' , response)
        // console.log('Body:' , body)
        done();
    });
});



console.log('Port:' , port)