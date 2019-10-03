var chai = require('chai')
var expect  = chai.expect;
var chaiHttp = require('chai-http')
var request = require('request');

var app = require('../routes/apiRoutes');

chai.use(chaiHttp);


describe('tests for "/" api endpoint', () => {
    it("/ should send back 200 status code", (done) => {
        chai.request(app)
        .get('/api/products/')
        .end((error, response) => {
            console.log('error - ',error)
            console.log('response -', response)
            expect(response.body.length > 0).equal(true)
            done()
        })
    })
})

describe('tests for "/" api endpoint', () => {
    it("/ should send back 200 status code", (done) => {
        chai.request(app)
        .get('api/contacts')
        .end((error, response) => {
            console.log(' -', true === false)
            expect(true === false)
            done()
        })
        expect(true == false)
    })
})

module.exports = app;