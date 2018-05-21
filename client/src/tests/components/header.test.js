import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { Header } from '../../components/Header';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { initialState as featureComponent } from '../../reducers/dataReducer.js';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('<Header />', () => {
	it('renders with authenticated props', () => {
		const auth = { name: 'Something Something', GoogleID: 12321312 };
		const wrapper = shallow(<Header {...auth} />);
		expect(wrapper).toMatchSnapshot();
	});

	it('renders without authenticated props', () => {
		const wrapper = shallow(<Header />);

		expect(wrapper).toMatchSnapshot();
	});
});
