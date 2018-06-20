import React from 'react';
import { shallow } from 'enzyme';
import { ReleaseList } from './ReleaseList';

const fetchData = jest.fn();
const fetchRelease = jest.fn();

const defaultProps = {
    key: 'releaseDetail',
    data: { thumb: '', title: '', label: '', artist: '', id: 2 },
    fetchData,
    fetchRelease,
};

describe('ReleaseList', () => {
    it('should render the component', () => {
        const wrapper = shallow(<ReleaseList {...defaultProps} />);
        expect(wrapper).toMatchSnapshot();
    });
});
