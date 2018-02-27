import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { Header } from '../../src/components/Header';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { initialState as featureComponent } from '../../src/reducers/dataReducer.js';

Enzyme.configure({ adapter: new Adapter() });

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('<Header />', () => {
	it('renders with default props', () => {
		const store = mockStore({ auth: 'hello' });
		const wrapper = shallow(<Header store={store} />);
		console.log(wrapper);
		expect(wrapper.length).toEqual(1);
	});
});
