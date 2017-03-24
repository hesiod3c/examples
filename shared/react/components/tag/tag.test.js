import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Tag from './index';

/** @test {Tag} */
describe('Tag component', () => {
/** @test {Tag#render} */
  describe('#render', () => {
    it('render correctly', () => {
      const wrapper = shallow(
        <Tag />
      );
      expect(wrapper.length).to.equal(1);
    });
  });
});

