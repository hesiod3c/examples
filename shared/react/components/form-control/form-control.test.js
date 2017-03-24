import React from 'react';
import { shallow, mount } from 'enzyme';
import {expect} from 'chai';

jest.dontMock('./index');

import FormControl from './index';

/** @test {FormControl} */
describe('FormControl component', function() {
/** @test {FormControl#render} */
  describe('#render', () => {
    it('renders correctly', () => {
      const wrapper = shallow(<FormControl />);
      expect(wrapper.length).to.equal(1);
    });
  });

/** @test {FormControl#type} */
  describe('#type', () => {
    it('placeholder and type', () => {
      const wrapper = mount(<FormControl placeholder="Digite um nome" />);
      expect(wrapper.prop('placeholder')).to.equal("Digite um nome");
      expect(wrapper.prop('type')).to.equal("text");
    });

    it('type search', () => {
      const wrapper = mount(<FormControl type="search" />);
      expect(wrapper.prop('type')).to.equal("search");
    });

    it('type textarea', () => {
      const wrapper = mount(<FormControl type="textarea" />);
      expect(wrapper.prop('type')).to.equal("textarea");
    });

    it('type select', () => {
      const wrapper = mount(<FormControl type="select" />);
      expect(wrapper.prop('type')).to.equal("select");
    });
  });
});
