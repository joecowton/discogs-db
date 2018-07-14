import React from 'react';
import { shallow } from 'enzyme';
import { ReleaseDetail } from './ReleaseDetail';

const fetchRelease = jest.fn();

const defaultProps = {
    key: 'releaseDetail',
    match: { params: { id: 2 } },
    data: { thumb: '', title: '', label: '', artist: '', id: 2 },
    fetchRelease,
};

describe('ReleaseDetail', () => {
    it('should render the component', () => {
        const wrapper = shallow(<ReleaseDetail {...defaultProps} />);
        expect(wrapper).toMatchSnapshot();
    });
});