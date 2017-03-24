import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Grid from './index';

/** @test {Grid} */
describe('Grid component', () => {
/** @test {Grid#render} */
  describe('#render', () => {
    it('render correctly', () => {
      const wrapper = shallow(
        <Grid />
      );
      expect(wrapper.length).to.equal(1);
    });
  });
});

