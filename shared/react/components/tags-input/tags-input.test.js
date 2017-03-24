import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import TagsInput from './index';

/** @test {TagsInput} */
describe('TagsInput component', () => {
  /** @test {TagsInput#render} */
  describe('#render', () => {
    it('render correctly', () => {
      const wrapper = shallow(
        <TagsInput />
      );
      expect(wrapper.length).to.equal(1);
    });
  });
});
