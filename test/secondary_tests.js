
var request = require('request');

const chai = require("chai");
const chaiHttp = require("chai-http");

const app = require("../app.js");

const { expect } = chai;


chai.use(chaiHttp);

const port = process.env.PORT || 3000;
const version = process.env.VERSION || "1.2.3-patch";
const sha = process.env.CIRCLE_SHA1 || "abc.xyz";

chai.use(chaiHttp);
describe("Testing API", () => {
  it("Verifies correct application version", done => {
    chai
      .request(app)
      .get("/version")
      .end((err, res) => {
        expect(res).to.have.status(200);
        // Notice the capitalization
        expect(res.body.VERSION).to.equals(version);
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
        console.log("Expecting SHA: " + sha)
        expect(res).to.have.status(200);
        console.log(res.body.buildCommit)
        expect(res.body.buildCommit).to.equals(sha);
        // expect(res.body.message).to.equals("Welcome To Testing API");
        console.log(res.header['x-powered-by'])
        done();
      });
  });
  it("does some more shit", done => {
    chai
      .request(app)
      .get("/version")
      .end((err, res) => {
        expect(res.header['x-powered-by']).to.equals("Express")
        done();
      });
  });
});

