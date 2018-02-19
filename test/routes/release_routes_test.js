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

  it("POST request to /api/releases saves releases", (done) => {
    const release = new Release(
      {
         title: 'Whatever',
         artist: "John",
         thumb: "scsdc",
         catno: 'LIVITY045',
         format: 'MP4',
         resource_url: "www.here.com",
         videos: ['www.sdvdsac.com']
        })

    release.save().then(() => {
      request(app)
        .get('/api/releases')
        .end((err, res) => {
          assert(res.body[0].title === 'Whatever')
        })
        done();
    })
  })

  it("GET request to /api/releases/:artist returns artists releases", (done) => {
    const release = new Release(
      {
         title: 'Whatever',
         artist: "John",
         thumb: "scsdc",
         catno: 'LIVITY045',
         format: 'MP4',
         resource_url: "www.here.com",
         videos: ['www.sdvdsac.com']
      }
    )
    const release2 = new Release(
      {
         title: 'Whatever',
         artist: "Jeff",
         thumb: "scsdc",
         catno: 'LIVITY045',
         format: 'MP4',
         resource_url: "www.here.com",
         videos: ['www.sdvdsac.com']
      }
    )
    release.save().then(() => {
      release2.save().then(() => {
        request(app)
          .get('/api/releases/John')
          .end((err, res) => {
            assert(res.body[0].artists === ['John'])
            assert(res.body[1].artists !== ['Jeff'])
          })
          done();
      })
    })
  })
})
