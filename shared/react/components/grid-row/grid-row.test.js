import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import GridRow from './index';

/** @test {GridRow} */
describe('GridRow component', () => {
/** @test {GridRow#render} */
  describe('#render', () => {
    it('render correctly', () => {
      const wrapper = shallow(
        <GridRow />
      );
      expect(wrapper.length).to.equal(1);
    });
  });
});

