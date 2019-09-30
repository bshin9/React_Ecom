var expect  = require('chai').expect;
var request = require('request');

it('should retrieve all the information from the products JSON', function(done) {
    request('http://localhost:8000/api/products', (error, response, body)=>{
        expect(response.statusCode).to.equal(200)
        done()
    })
});

it('should return the correct product under the filter set by user', function(done) {
    request('http://localhost:8000/api/productfilter', (error, response, body)=>{
        expect(response.statusCode).to.equal(200)
        done()
    })
});
 
it('should retrieve the contact information', function(done) {
    request('http://localhost:8000/api/contacts', (error, response, body) => {
        expect(response.statusCode).to.equal(200)
        done()
    })
});