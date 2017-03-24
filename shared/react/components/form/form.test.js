import React from 'react';
import { shallow } from 'enzyme';

import styles from './form.scss';

jest.dontMock('./index');

import Form from './index';

/** @test {Form} */
describe('Form component', function() {
/** @test {Form#render} */
  describe('#render', () => {
    it('renders correctly', () => {
      expect(shallow(<Form onSubmit={()=>{}} />).length).toEqual(1);
    });
  });

/** @test {Form#style} */
  describe('#style', () => {
    it('inline', () => {
      const wrapper = shallow(<Form onSubmit={()=>{}} style='inline' />);
      expect(wrapper.hasClass(styles.inline)).toEqual(true);
    });
    it('horizontal', () => {
      const wrapper = shallow(<Form onSubmit={()=>{}} style='horizontal' />);
      expect(wrapper.hasClass(styles.horizontal)).toEqual(true);
    });
  });
});
