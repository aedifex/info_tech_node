var expect  = require('chai').expect;
var request = require('request');

// We'll run two files, with two tests each
// primary tests will test the primary endpoints
// and routes.

const port = process.env.PORT || 3000;

console.log("Greeting from: " + (process.env.CIRCLE_JOB || null) + "running on Node index: " + (process.env.CIRCLE_NODE_INDEX || null))

// Attempt at 'sleep'
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function demo() {
  console.log('Taking a break...');
  await sleep(600000);
  console.log('Two seconds later, showing sleep in a loop...');

  // Sleep in loop
  for (let i = 0; i < 5; i++) {
    if (i === 3)
      await sleep(600000);
    console.log(i);
  }
}

demo();

it('Main page status', function(done) {
    request(`http://localhost:${port}` , function(error, response, body) {
    	// console.log(body)
        expect(response.statusCode).to.equal(200);
        done();
    });
});

console.log('Port:' , port)