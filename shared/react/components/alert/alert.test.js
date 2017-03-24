import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

jest.dontMock('./index');

import Alert from './index';
import styles from './alert.scss';

/** @test {alert} */
describe('Alert component', function() {

  /** @test {Alert#render} */
  describe('#render', () => {
    const textExample = '<p> Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.</p>';

    it('render correctly', () => {
      const wrapper = shallow(
        <Alert>
          {textExample}
        </Alert>
      );
      expect(wrapper.find('p')).to.exists;
    });

    it('render incorrectly', () => {
      const wrapper = shallow(<Alert />);
      expect(wrapper.find('p')).to.not.exists;
    });

    it('render info alert', () => {
      const wrapper = shallow(
        <Alert type="info">
          {textExample}
        </Alert>
      );
      expect(wrapper.find(`.${styles.info}`)).to.exists;
    });
  });
});
