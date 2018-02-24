import { expect } from 'chai';
import { FETCH_USER } from '../../src/actions/types';
import { fetchUser } from '../../src/actions/index';

describe('actions', () => {
	describe('saveComment', () => {
		it('has the correct type', () => {
			const action = fetchUser();
			console.log(action.type);
			expect(action.type).to.equal(FETCH_USER);
		});

		it('has the correct payload', () => {
			const action = fetchUser('new comment');
			expect(action.payload).to.equal('new comment');
		});
	});
});
