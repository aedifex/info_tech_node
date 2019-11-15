
var request = require('request');

const chai = require("chai");
const chaiHttp = require("chai-http");

const app = require("../app.js");

const { expect } = chai;


chai.use(chaiHttp);

const port = process.env.PORT || 3000;
const version = process.env.VERSION || "123.123";
const sha = process.env.CIRCLE_SHA1 || "abc.xyz";

chai.use(chaiHttp);
describe("Testing API", () => {
  it("Verifies correct application version", done => {
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
        console.log("Expecting version: " + process.env.CIRCLE_SHA1)
        expect(res).to.have.status(200);
        console.log(res.body.SHA)
        expect(res.body.SHA).to.equals(sha);
        // expect(res.body.message).to.equals("Welcome To Testing API");
        done();
      });
  });
});
