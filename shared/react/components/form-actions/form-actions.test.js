import React from 'react';
import { shallow } from 'enzyme';

jest.dontMock('./index');

import FormActions from './index';

/** @test {FormActions} */
describe('FormActions component', function() {
/** @test {FormActions#render} */
  describe('#render', () => {
    it('renders correctly', () => {
      const wrapper = shallow(<FormActions />);
      expect(wrapper.length).toEqual(1);
    });
  });
});
