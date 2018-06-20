import React from 'react';
import { shallow } from 'enzyme';
import Landing from './Landing';

describe('Landing', () => {
    it('should render the component', () => {
        const wrapper = shallow(<Landing />);
        expect(wrapper).toMatchSnapshot();
    });
});
