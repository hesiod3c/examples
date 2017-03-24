import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Modal from './index';

const modal = {
  id: `${(new Date()).getTime()}`,
  header: `Termos de Segmentação`
};

/** @test {Modal} */
describe('Modal component', () => {
/** @test {Modal#render} */
  describe('#render', () => {
    it('render correctly', () => {
      const wrapper = shallow(
        <Modal data={modal} />
      );
      expect(wrapper.length).to.equal(1);
    });
  });
});

