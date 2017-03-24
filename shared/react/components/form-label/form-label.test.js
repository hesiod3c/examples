import React from 'react';
import { shallow } from 'enzyme';
import {expect} from 'chai';

jest.dontMock('./index');

import FormLabel from './index';

/** @test {FormLabel} */
describe('FormLabel component', function() {
  /** @test {FormLabel#render} */
  describe('#render', () => {
    it('renders correctly', () => {
      const wrapper = shallow(<FormLabel>Nome:</FormLabel>);
      expect(wrapper.length).to.equal(1);
    });
  });
});
