import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

jest.dontMock('./index');

import Breadcrumb from './index';

/** @test {Breadcrumb} */
describe('Alert component', function() {

  /** @test {Breadcrumb#render} */
  describe('#render', () => {

    it('render correctly', () => {
      const wrapper = shallow(
        <Breadcrumb>
          <Breadcrumb.Item text="teste 1" url="test url"/>
          <Breadcrumb.Item text="teste 2"/>
        </Breadcrumb>
      );
      expect(wrapper.find('a')).to.exists;
      expect(wrapper.find('strong')).to.exists;
    });

    it('render incorrectly', () => {
      const wrapper = shallow(
        <Breadcrumb />
      );
      expect(wrapper.find('a')).to.not.exists;
      expect(wrapper.find('strong')).to.not.exists;
    });

  });
});
