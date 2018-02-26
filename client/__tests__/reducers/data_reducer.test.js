import { expect } from 'chai';
import dataReducer from '../../src/reducers/dataReducer';
import { FETCH_DATA } from '../../src/actions/types';
import { FETCH_RELEASE } from '../../src/actions/types';
import { FETCH_ARTIST } from '../../src/actions/types';
import { SUBMIT_RELEASE } from '../../src/actions/types';

describe('Data Reducer', () => {
	it('handles action with unkown type', () => {
		expect(dataReducer(undefined, {})).to.be.instanceOf(Array);
	});

	it('FETCH_DATA', () => {
		const action = { type: FETCH_DATA, payload: ['hello'] };
		expect(dataReducer([], action)).to.eql(['hello']);
	});

	// it('FETCH_RELEASE', () => {
	// 	const action = { type: FETCH_RELEASE, payload: 'data' };
	// 	expect(dataReducer([], action)).to.eql(['data']);
	// });

	it('FETCH_ARTIST', () => {
		const action = { type: FETCH_ARTIST, payload: 'data' };
		expect(dataReducer([], action)).to.eql('data');
	});

	it('SUBMIT_RELEASE', () => {
		const action = { type: SUBMIT_RELEASE, payload: 'data' };
		expect(dataReducer([], action)).to.eql('data');
	});
});
