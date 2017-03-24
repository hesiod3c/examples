import React from 'react';
import { shallow } from 'enzyme';
import {expect} from 'chai';

jest.dontMock('./index');

import HelpText from './index';

/** @test {HelpText} */
describe('HelpText component', function() {
/** @test {HelpText#render} */
  describe('#render', () => {
    it('renders correctly', () => {
      const wrapper = shallow(<HelpText>Text</HelpText>);
      expect(wrapper.find('span')).to.exists;
    });
  });
});
