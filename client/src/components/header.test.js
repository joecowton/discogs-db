import React from 'react';
import { shallow } from 'enzyme';
import { Header } from './Header';

const defaultProps = {
    auth: true,
};

describe('Header', () => {
    it('should render the component', () => {
        const wrapper = shallow(<Header {...defaultProps} />);
        expect(wrapper).toMatchSnapshot();
    });
});
