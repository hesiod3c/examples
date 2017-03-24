import React from 'react';
import { shallow } from 'enzyme';

jest.dontMock('./index');

import FormGroup from './index';

/** @test {FormGroup} */
describe('FormGroup component', function() {
/** @test {Button#render} */
  describe('#render', () => {
    it('renders correctly', () => {
      const wrapper = shallow(<FormGroup />);
      expect(wrapper.length).toEqual(1);
    });
  });
});
