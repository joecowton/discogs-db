const assert = require('assert');
const mongoose = require('mongoose');
const request = require('supertest');
const Release = mongoose.model('releases');
const app = require('../../app');

describe('Release routes', () => {
  it("GET request to /api/releases returns releases", (done) => {
    const release = new Release({ title: 'Whatever' })

    release.save().then(() => {
      request(app)
        .get('/api/releases')
        .end((err, res) => {
          assert(res.body[0].title === 'Whatever')
        })
        done();
    })
  })
})
