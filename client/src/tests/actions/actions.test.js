import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { fetchUser } from '../../actions/index';
import { FETCH_USER } from '../../actions/types';

const createMockStore = configureMockStore([thunk]);
const store = createMockStore({ bitcoin: {} });
const mockResponse = { body: { name: 'Johny Rotten' } };

// fetchMock.get('https://api/current_user', mockResponse);

// test('FETCH_USER', () => {
// 	const expectedActions = [{ user: mockResponse.body, type: FETCH_USER }];
// 	return store.dispatch(fetchUser()).then(() => {
// 		expect(store.getActions()).toEqual(expectedActions);
// 	});
// });

it('creates an async action to fetch the bitcoin value', () =>
    // const expectedActions = [{ bitcoin: mockResponse.body, type: FETCH_USER }];
    store.dispatch(fetchUser()).then(() => {
        expect(store.getActions()).toEqual(2);
    }));
