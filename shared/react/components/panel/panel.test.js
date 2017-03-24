import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
jest.dontMock('./index');

import Panel from './index';
import styles from './panel.scss';

/** @test {panel} */
describe('Panel component', function() {

  /** @test {Panel#render} */
  describe('#render', () => {
    const textExample = '<p> Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.</p>';

    it('render correctly', () => {
      const wrapper = shallow(
        <Panel header="test">
          {textExample}
        </Panel>
      );
      expect(wrapper.find('p')).to.exists;
    });

    it('render header footer', () => {
      const wrapper = shallow(
        <Panel header="test" footer="test">
          {textExample}
        </Panel>
      );
      expect(wrapper.find('header')).to.exists;
      expect(wrapper.find('footer')).to.exists;
    });

    it('render scroll', () => {
      const wrapper = shallow(
        <Panel header="test" scroll>
          {textExample}
        </Panel>
      );
    expect(wrapper.find(`.${styles.scroll}`)).to.exists;
    });
  });
});
