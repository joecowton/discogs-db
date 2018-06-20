import { expect } from 'chai';
import dataReducer from '../../reducers/dataReducer';
import * as actionTypes from '../../actions/types';

describe('Data Reducer', () => {
	test('handles action with unkown type', () => {
		expect(dataReducer(undefined, {})).to.be.instanceOf(Array);
	});

	test('FETCH_DATA', () => {
		const action = { type: actionTypes.FETCH_DATA, payload: ['hello'] };
		expect(dataReducer([], action)).to.eql(['hello']);
	});

	test('FETCH_ARTIST', () => {
		const artist = { name: 'Jimmy Hendrix', age: 27 };
		const action = { type: actionTypes.FETCH_ARTIST, payload: artist };
		expect(dataReducer([], action)).to.eql(artist);
	});

	test('SUBMIT_RELEASE', () => {
		const action = { type: actionTypes.SUBMIT_RELEASE, payload: 'data' };
		expect(dataReducer([], action)).to.eql('data');
	});
});
