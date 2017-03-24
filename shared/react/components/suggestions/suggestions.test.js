import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Suggestions from './index';

/** @test {Suggestions} */
describe('Suggestions component', () => {
/** @test {Suggestions#render} */
  describe('#render', () => {
    it('render correctly', () => {
      const wrapper = shallow(
        <Suggestions />
      );
      expect(wrapper.length).to.equal(1);
    });
  });
});

