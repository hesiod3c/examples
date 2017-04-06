import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Calendar from './index';

/** @test {Calendar} */
describe('Calendar component', () => {
  /** @test {Calendar#render} */
  describe('#render', () => {
    it('render correctly', () => {
      const wrapper = shallow(
        <Calendar />
      );
      expect(wrapper.length).to.equal(1);
    });
  });
});
