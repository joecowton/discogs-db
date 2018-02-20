const assert = require('assert');
const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../../app');
const Artist = mongoose.model('artists');

describe('Artist routes', () => {
	it('GET request to /api/artists gets all the artist', done => {
		const artist = new Artist({ name: 'Kula Shaker' });
		artist.save().then(() => {
			request(app)
				.get('/api/artists')
				.end((err, res) => {
					assert(res.body.length === 1);
					assert(res.body[0].name === 'Kula Shaker');
					done();
				});
		});
	});
	it('POST request to /api/artists creates new artist', done => {
		Artist.count().then(count => {
			request(app)
				.post('/api/artists')
				.send({ name: 'Fat Joe' })
				.end(() => {
					Artist.count().then(newCount => {
						assert(count + 1 === newCount);
						done();
					});
				});
		});
	});
});
