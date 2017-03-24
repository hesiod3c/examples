import React from 'react';
import { shallow } from 'enzyme';

jest.dontMock('./index');

import SvgIcon from './index';

describe('SvgIcon component', function() {
  it('should have a svg', () => {
    const wrapper = shallow(<SvgIcon />);
    expect(wrapper.find('svg')).toHaveLength(1);
  });
});
