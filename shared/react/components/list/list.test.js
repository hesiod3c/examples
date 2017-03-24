import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

jest.dontMock('./index');

import List from './index';

import styles from './list.scss';

/** @test {List} */
describe('List component', function() {

  /** @test {List#render} */
  describe('#render', () => {

    it('render correctly', () => {
      const wrapper = shallow(
        <List>
          <List.Item />
        </List>
      );
      expect(wrapper.find('li')).to.exists;
    });
  });

  /** @test {List#style} */
  describe('#style', () => {
    it('should have an bordered style', () => {
      const wrapper = shallow(
        <List style="bordered">
          <List.Item />
        </List>
      );
      expect(wrapper.find(styles.bordered)).to.exists;
    });
  });

  /** @test {List#style} */
  describe('#type', () => {
    it('should have an type disc', () => {
      const wrapper = shallow(
        <List type="disc">
          <List.Item />
        </List>
      );

      expect(wrapper.find(styles.disc)).to.exists;
    });

    it('should have an type circle', () => {
      const wrapper = shallow(
        <List type="circle">
          <List.Item />
        </List>
      );
      expect(wrapper.find(styles.circle)).to.exists;
    });

    it('should have an type decimal', () => {
      const wrapper = shallow(
        <List type="decimal">
          <List.Item />
        </List>
      );
      expect(wrapper.find(styles.decimal)).to.exists;
    });
  });
});
