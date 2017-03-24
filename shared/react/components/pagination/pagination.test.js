import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';

import styles from './pagination.scss';

jest.dontMock('./index');

import Pagination from './index';

/** @test {Pagination} */
describe('Pagination component', () => {
  const props = {
    totalItemsCount: 20,
    onClick: () => {},
    onChange: () => {}
  };
  /** @test {Pagination#render} */
  describe('#render', () => {
    it("renders a UL tag", () => {
      const wrapper = mount(<Pagination {...props} />);
      expect(wrapper.find("ul")).to.have.length(1);
    });

    it("renders the appropriate amount of children", () => {
      const wrapper = mount(<Pagination {...props} />);
      expect(wrapper.children()).to.have.length(6);
    });

    it("renders the next page link", () => {
      const wrapper = mount(<Pagination {...props} />);
      expect(wrapper.childAt(4).text()).to.eql(wrapper.prop("nextPageText"));
    });

    it("renders the prev page link if there is one", () => {
      const wrapper = mount(<Pagination {...props} />);
      expect(wrapper.childAt(1).text()).to.eql(wrapper.prop("prevPageText"));
    });

    it("renders the first page link if there is one", () => {
      const wrapper = mount(<Pagination {...props} />);
      expect(wrapper.childAt(0).text()).to.eql(wrapper.prop("firstPageText"));
    });

    it("renders the last page link if there is one", () => {
      const wrapper = mount(<Pagination {...props} />);
      expect(wrapper.childAt(5).text()).to.eql(wrapper.prop("lastPageText"));
    });
  });
});

/** @test {PaginationItem} */
describe('PaginationItem component', () => {
  const props = {
    onClick: () => {},
    pageNumber: 1
  };
  /** @test {PaginationItem#render} */
  describe('#render', () => {
    it("renders an li", () => {
      const wrapper = shallow(<Pagination.Item {...props} />);
      expect(wrapper.find("li")).to.have.length(1);
    });

    it("sets the active class if the page is active", () => {
      const wrapper = mount(<Pagination.Item {...props} isActive={true} />);
      expect(wrapper.prop("isActive")).to.be.true;
      expect(wrapper.find("li").hasClass(styles.active)).to.be.true;
    });

    it("sets the disabled class if the page is disabled", () => {
      const wrapper = mount(<Pagination.Item {...props} isDisabled={true} />);
      expect(wrapper.prop("isDisabled")).to.be.true;
      expect(wrapper.find("li").hasClass(styles.disabled)).to.be.true;
    });

    it("is not disabled by default", () => {
      const wrapper = mount(<Pagination.Item {...props} />);
      expect(wrapper.prop("isDisabled")).to.be.false;
      expect(wrapper.find("li").hasClass(styles.disabled)).to.be.false;
    });

    it("renders an element as a child if passed an one", () => {
      const child = <strong>1</strong>;
      const wrapper = mount(<Pagination.Item {...props}  pageText={child} />);
      expect(wrapper.html()).to.eql(`<li class=\"${styles['pagination-item']}\"><a class=\"${styles['pagination-link']}\" href=\"#\"><strong>1</strong></a></li>`);
    });
  });
});
