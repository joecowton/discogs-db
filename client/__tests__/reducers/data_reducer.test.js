import { expect } from 'chai';
import dataReducer from '../../src/reducers/dataReducer';
import * as actionTypes from '../../src/actions/types';

describe('Data Reducer', () => {
	it('handles action with unkown type', () => {
		expect(dataReducer(undefined, {})).to.be.instanceOf(Array);
	});

	it('FETCH_DATA', () => {
		const action = { type: actionTypes.FETCH_DATA, payload: ['hello'] };
		expect(dataReducer([], action)).to.eql(['hello']);
	});

	it('FETCH_ARTIST', () => {
		const action = { type: actionTypes.FETCH_ARTIST, payload: 'data' };
		expect(dataReducer([], action)).to.eql('data');
	});

	it('SUBMIT_RELEASE', () => {
		const action = { type: actionTypes.SUBMIT_RELEASE, payload: 'data' };
		expect(dataReducer([], action)).to.eql('data');
	});
});
