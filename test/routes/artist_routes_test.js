const assert = require('assert');
const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../../index');
const Artist = mongoose.model('artists')

describe('Artist routes', () => {
  it("GET '/artist' returns artist", (done) => {
    const artist = new Artist({ name: 'RZA' })
    artist.save().then(() => {
      request(app)
        .get('/api/artists')
        .end((err, res) => {
          assert(res.body.length === 1)
          assert(res.body[0].name === 'RZA')
        })
    })
  })
})
