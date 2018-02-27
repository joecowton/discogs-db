import * as actions from '../../src/actions/index';
import * as types from '../../src/actions/types';

describe('actions', () => {
	test('FETCH_USER', () => {
		expect(actions.FETCH_USER).toEqual('fetch_user');
	});

	test('FETCH_DATA', () => {
		expect(actions.FETCH_DATA).toEqual('fetch_data');
	});

	test('FETCH_RELEASE', () => {
		expect(actions.FETCH_RELEASE).toEqual('fetch_release');
	});

	test('FETCH_ARTIST', () => {
		expect(actions.FETCH_ARTIST).toEqual('fetch_artist');
	});

	test('SUBMIT_RELEASE', () => {
		expect(actions.SUBMIT_RELEASE).toEqual('submit_release');
	});
});
