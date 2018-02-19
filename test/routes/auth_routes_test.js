const assert = require('assert');
const mongoose = require('mongoose');
const request = require('supertest');
var should = require('should');

const app = require('../../app');


describe('API AUTH TEST', ()=> {
  let token;

  before((done) => {
    request(app)
      .post('/auth/google')
      .send({
        email: 'joecowton@gmail.com',
        password: 'Endpoint1983'
      })
      .end((err, res) => {
        console.log(res.body);
        res.body.should.to.have.property('token');
        token = res.body.token;
        console.log(token)
        done()
      })
  })

  it('should respond with status code 200 and so on...', function (done) {
   request(app)
     .get('/api/v2/blah-blah')
     .set('authorization', 'Bearer ' + token) // 1) using the authorization header
     .expect(200)
     .expect('Content-Type', /json/)
     .end(function (err, res) {
       if (err) {
         return done(err);
       }

       // some `res.body` assertions...

       done();
     });
 });

})
