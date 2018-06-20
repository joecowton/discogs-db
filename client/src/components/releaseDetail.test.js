import React from 'react';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import ReleaseDetail from './ReleaseDetail';

const middlewares = [];
const mockStore = configureStore(middlewares);

describe('<ReleaseDetail />', () => {
    it('should render the component', () => {
        const initialState = { data: { id: 2 } };
        const store = mockStore(initialState);
        const props = { key: 'releaseDetail', match: { params: { id: 2 } } };
        const wrapper = shallow(<ReleaseDetail {...props} store={store} />);
        expect(wrapper).toMatchSnapshot();
    });
});
