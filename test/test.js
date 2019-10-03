var chai = require('chai')
var expect  = chai.expect;
var chaiHttp = require('chai-http')
var request = require('request');

var app = require('../server');

// middleware to test http apps or external services
// creating a parallel database
chai.use(chaiHttp);

// we want to test if the endpoints are sending an response back
// the response should target the text of the index.html page
describe('tests for "/" api endpoint', () => {
    it("/ should send back 200 status code", (done) => {
        chai.request(app)
        .get('/api/')
        .end((error, response) => {
            console.log('error - ',error)
            console.log(response.text)
            expect(response.text.length > 0).equal(true);
            done()
        })
    })
})

// we are testing to see if products page is returning the products 
describe('tests for "/products" api endpoint', () => {
    it("/products should send back 200 status code", (done) => {
        chai.request(app)
        .get('/api/products')
        .end((error, response) => {
            console.log('error - ',error)
            console.log(response.body)
            expect(response.body.length > 0).equal(true);
            done()
        })
    })
})

describe('tests for "/productfilter" api endpoint', () => {
    it("/productfilter should send back 200 status code", (done) => {
        chai.request(app)
        .get('/api/productfilter/Wood')
        .end((error, response) => {
            console.log('error - ',error)
            console.log(response.body)
            expect(response.body.length > 0).equal(true);
            done()
        })
    })
})

describe('tests for "/contacts" api endpoint', () => {
    it("/contacts should send back 200 status code", (done) => {
        chai.request(app)
        .get('/api/contacts')
        .end((error, response) => {
            console.log('error - ',error)
            console.log(response.body)
            expect(response.body.length > 0).equal(true);
            done()
        })
    })
})


module.exports = app;