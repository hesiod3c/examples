import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import GridCol from './index';

/** @test {GridCol} */
describe('GridCol component', () => {
/** @test {GridCol#render} */
  describe('#render', () => {
    it('render correctly', () => {
      const wrapper = shallow(
        <GridCol />
      );
      expect(wrapper.length).to.equal(1);
    });
  });
});

