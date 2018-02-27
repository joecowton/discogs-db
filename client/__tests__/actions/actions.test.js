import * as actions from '../../src/actions/index';
import * as types from '../../src/actions/types';

describe('actions', () => {
	test('FETCH_USER', () => {
		expect(types.FETCH_USER).toEqual('fetch_user');
	});

	test('fetch_user', () => {
		expect(typeof actions.fetchUser()).toEqual('function');
	});

	test('FETCH_DATA', () => {
		expect(types.FETCH_DATA).toEqual('fetch_data');
	});

	test('fetch_data', () => {
		expect(typeof actions.fetchData()).toEqual('function');
	});

	test('FETCH_RELEASE', () => {
		expect(types.FETCH_RELEASE).toEqual('fetch_release');
	});

	test('fetch_release', () => {
		expect(typeof actions.fetchRelease()).toEqual('function');
	});

	test('FETCH_ARTIST', () => {
		expect(types.FETCH_ARTIST).toEqual('fetch_artist');
	});

	test('fetch_artist', () => {
		expect(typeof actions.fetchArtist()).toEqual('function');
	});

	test('SUBMIT_RELEASE', () => {
		expect(types.SUBMIT_RELEASE).toEqual('submit_release');
	});

	test('submitRelease', () => {
		expect(typeof actions.submitRelease()).toEqual('function');
	});
});
