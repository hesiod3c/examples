import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Autocomplete from './index';
/** @test {Autocomplete} */
describe('Autocomplete component', () => {
  /** @test {Autocomplete#render} */
  describe('#render', () => {
    it('render correctly', () => {
      const wrapper = shallow(
        <Autocomplete />
      );
      expect(wrapper.length).to.equal(1);
    });
  });
});
