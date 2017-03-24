import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';

jest.dontMock('./index');

import Image from './index';

import styles from '../../../scss/06-components/image.scss';

/** @test {Image} */
describe('Image component', function() {
  const pathImage = 'https://placeholdit.imgix.net/~text?txtsize=13&txt=image&w=100&h=100';
/** @test {Image#render} */
  describe('#render', () => {

    it('render correctly', () => {
      const wrapper = shallow(<Image path={pathImage}/>);
      expect(wrapper.find('img')).to.exists;
    });

    it('render incorrectly', () => {
      const wrapper = shallow(<Image path='' />);
      expect(wrapper.find('img')).to.not.exists;
    });

    it('should have default props', () => {
      const wrapper = shallow(<Image path={pathImage}/>);
      expect(wrapper.props().size).to.be.defined;
      expect(wrapper.props().align).to.be.defined;
    });
  });

/** @test {Image#size} */
  describe('#size', () => {
    it('should have an default size', () => {
      const wrapper = mount(<Image path={pathImage}/>);
      expect(wrapper.props().size).to.equal('medium');
    });

    it('should have a valid size', () => {
      const wrapper = shallow(<Image size="small" path={pathImage}/>);
      expect(wrapper.find(`.${styles.small}`)).to.exists;
    });
  });

/** @test {Image#align} */
  describe('#align', () => {
    it('should have an default align', () => {
      const wrapper = mount(<Image path={pathImage}/>);
      expect(wrapper.props().align).to.equal('left');
    });

    it('should have a valid align', () => {
      const wrapper = shallow(<Image align="center" path={pathImage}/>);
      expect(wrapper.find(`.${styles.center}`)).to.exists;
    });
  });
});
