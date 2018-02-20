const assert = require('assert');
const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../../app');

describe('Homepage', () => {
	it('GET request to \'/api\' returns welcome message', done => {
		request(app)
			.get('/api/')
			.end((err, res) => {
				assert(res.body.message === 'Welcome to the server');
				done();
			});
	});
});
