const assert = require('assert');
const request = require('supertest');
const app = require('express');
const mongoose = require('mongoose');

describe("Homepage", () => {
  it("GET request to '/api' returns welcome message", (done) => {
    request(app)
      .get('/api/')
      .end((err, res) => {
        assert(res.body.message === 'Welcome to the server')
        done();
    })
  })
})
