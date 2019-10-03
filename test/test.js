var chai = require('chai')
var expect  = chai.expect;
var chaiHttp = require('chai-http')
var request = require('request');

var app = require('../server');

chai.use(chaiHttp);


describe('tests for "/" api endpoint', () => {
    it("/ should send back 200 status code", (done) => {
        chai.request(app)
        .get('/api/')
        .end((error, response) => {
            console.log('error - ',error)
            console.log('response -', response.body.length > 0)
            console.log('response 1 - ', response.text);
            expect(response.text.length > 0).equal(true);
            done()
        })
    })
})

describe('tests for "/products" api endpoint', () => {
    it("/ should send back 200 status code", (done) => {
        chai.request(app)
        .get('/api/products')
        .end((error, response) => {
            console.log('error - ',error)
            console.log('response -', response.body.length > 0)
            console.log('response 1 - ', response.body);
            expect(response.body.length > 0).equal(true);
            done()
        })
    })
})

describe('tests for "/" api endpoint', () => {
    it("/ should send back 200 status code", (done) => {
        chai.request(app)
        .get('/api/products')
        .end((error, response) => {
            console.log('error - ',error)
            console.log('response -', response.body.length > 0)
            console.log('response 1 - ', response.body);
            expect(response.body.length > 0).equal(true);
            done()
        })
    })
})

module.exports = app;