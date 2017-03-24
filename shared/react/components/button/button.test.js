import React from 'react';
import { shallow, mount } from 'enzyme';
import {expect} from 'chai';

jest.dontMock('./index');

import Button from './index';
import styles from './button.scss';
/** @test {Button} */
describe('Button component', function() {

/** @test {Button#render} */
  describe('#render', () => {

    it('render correctly', () => {
      const wrapper = shallow(<Button>Text</Button>);
      expect(wrapper.find('button')).to.exists;
    });

    it('render incorrectly', () => {
      const wrapper = shallow(<Button />);
      expect(wrapper.find('button')).to.not.exists;
    });

    it('should have a text children', () => {
      const wrapper = shallow(<Button>Text</Button>);
      expect(wrapper.text()).to.equal('Text');
    });

    it('should have default props', () => {
      const wrapper = shallow(<Button>Text</Button>);
      expect(wrapper.props().style).to.be.defined;
      expect(wrapper.props().size).to.be.defined;
      expect(wrapper.props().type).to.be.defined;
    });
  });

/** @test {Button#type} */
  describe('#type', () => {
    it('should have an default type', () => {
      const wrapper = shallow(<Button>Text</Button>);
      expect(wrapper.props().type).to.equal('button');
    });
  });

/** @test {Button#size} */
  describe('#size', () => {
    it('should have an default size', () => {
      const wrapper = mount(<Button>Text</Button>);
      expect(wrapper.props().size).to.equal('medium');
    });

    it('should have a valid size', () => {
      const wrapper = shallow(<Button size="mini">Text</Button>);
      expect(wrapper.find(styles.mini)).to.exists;
    });
  });

/** @test {Button#style} */
  describe('#style', () => {
    it('should have an default style', () => {
      const wrapper = mount(<Button>Text</Button>);
      expect(wrapper.props().style).to.equal('default');
    });

    it('should have a valid style', () => {
      const wrapper = shallow(<Button style="primary">Text</Button>);
      expect(wrapper.find(styles.primary)).to.exists;
    });
  });

/** @test {Button#active} */
  describe('#active', () => {
    it('should have an default active', () => {
      const wrapper = mount(<Button>Text</Button>);
      expect(wrapper.props().active).to.equal(false);
    });

    it('has active', () => {
      const wrapper = mount(<Button active>Text</Button>);
      expect(wrapper.props().active).to.equal(true);
    });
  });

/** @test {Button#block} */
  describe('#block', () => {
    it('should have an default block', () => {
      const wrapper = mount(<Button>Text</Button>);
      expect(wrapper.props().block).to.equal(false);
    });

    it('has block', () => {
      const wrapper = mount(<Button block>Text</Button>);
      expect(wrapper.props().block).to.equal(true);
    });
  });

/** @test {Button#disabled} */
  describe('#disabled', () => {
    it('should have an default disabled', () => {
      const wrapper = mount(<Button>Text</Button>);
      expect(wrapper.props().disabled).to.equal(false);
    });

    it('has disabled', () => {
      const wrapper = mount(<Button disabled>Text</Button>);
      expect(wrapper.props().disabled).to.equal(true);
    });
  });
});
