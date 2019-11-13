
var request = require('request');

const chai = require("chai");
const chaiHttp = require("chai-http");

const app = require("../app.js");

const { expect } = chai;


chai.use(chaiHttp);

const port = process.env.PORT || 3000;
const version = process.env.VERSION || "123.123";
const sha = process.env.SHA || "abc.xyz";

chai.use(chaiHttp);
describe("Server!", () => {
  it("welcomes user to the api", done => {
    chai
      .request(app)
      .get("/version")
      .end((err, res) => {
        expect(res).to.have.status(200);
        console.log(res.body.version)
        expect(res.body.version).to.equals(version);
        // expect(res.body.message).to.equals("Welcome To Testing API");
        done();
      });
  });
  // Second individual test goes here
  it("does some more shit", done => {
    chai
      .request(app)
      .get("/version")
      .end((err, res) => {
        expect(res).to.have.status(200);
        console.log(res.body.sha)
        expect(res.body.SHA).to.equals(sha);
        // expect(res.body.message).to.equals("Welcome To Testing API");
        done();
      });
  });
});


/*
  it("adds 2 numbers", done => {
    chai
      .request(app)
      .post("/add")
      .send({ num1: 5, num2: 5 })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.status).to.equals("success");
        expect(res.body.result).to.equals(10);
        done();
      });
  });
});




it('Main page status', function(done) {
    request(`http://localhost:${port}/version` , function(error, response, body) {
    	console.log("Version: " + response.body);
        expect(response.body.status).to.equal(status);
        done();
    });
});
*/