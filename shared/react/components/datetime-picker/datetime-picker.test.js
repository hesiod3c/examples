import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import DatetimePicker from './index';

/** @test {DatetimePicker} */
describe('DatetimePicker component', () => {
/** @test {DatetimePicker#render} */
  describe('#render', () => {
    it('render correctly', () => {
      const wrapper = shallow(
        <DatetimePicker />
      );
      expect(wrapper.length).to.equal(1);
    });
  });
});

