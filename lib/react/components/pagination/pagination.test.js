'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _chai = require('chai');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {};


jest.dontMock('./index');

/** @test {Pagination} */
describe('Pagination component', function () {
  var props = {
    totalItemsCount: 20,
    onClick: function onClick() {},
    onChange: function onChange() {}
  };
  /** @test {Pagination#render} */
  describe('#render', function () {
    it("renders a UL tag", function () {
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index2.default, props));
      (0, _chai.expect)(wrapper.find("ul")).to.have.length(1);
    });

    it("renders the appropriate amount of children", function () {
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index2.default, props));
      (0, _chai.expect)(wrapper.children()).to.have.length(6);
    });

    it("renders the next page link", function () {
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index2.default, props));
      (0, _chai.expect)(wrapper.childAt(4).text()).to.eql(wrapper.prop("nextPageText"));
    });

    it("renders the prev page link if there is one", function () {
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index2.default, props));
      (0, _chai.expect)(wrapper.childAt(1).text()).to.eql(wrapper.prop("prevPageText"));
    });

    it("renders the first page link if there is one", function () {
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index2.default, props));
      (0, _chai.expect)(wrapper.childAt(0).text()).to.eql(wrapper.prop("firstPageText"));
    });

    it("renders the last page link if there is one", function () {
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index2.default, props));
      (0, _chai.expect)(wrapper.childAt(5).text()).to.eql(wrapper.prop("lastPageText"));
    });
  });
});

/** @test {PaginationItem} */
describe('PaginationItem component', function () {
  var props = {
    onClick: function onClick() {},
    pageNumber: 1
  };
  /** @test {PaginationItem#render} */
  describe('#render', function () {
    it("renders an li", function () {
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default.Item, props));
      (0, _chai.expect)(wrapper.find("li")).to.have.length(1);
    });

    it("sets the active class if the page is active", function () {
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index2.default.Item, _extends({}, props, { isActive: true })));
      (0, _chai.expect)(wrapper.prop("isActive")).to.be.true;
      (0, _chai.expect)(wrapper.find("li").hasClass(styles.active)).to.be.true;
    });

    it("sets the disabled class if the page is disabled", function () {
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index2.default.Item, _extends({}, props, { isDisabled: true })));
      (0, _chai.expect)(wrapper.prop("isDisabled")).to.be.true;
      (0, _chai.expect)(wrapper.find("li").hasClass(styles.disabled)).to.be.true;
    });

    it("is not disabled by default", function () {
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index2.default.Item, props));
      (0, _chai.expect)(wrapper.prop("isDisabled")).to.be.false;
      (0, _chai.expect)(wrapper.find("li").hasClass(styles.disabled)).to.be.false;
    });

    it("renders an element as a child if passed an one", function () {
      var child = _react2.default.createElement(
        'strong',
        null,
        '1'
      );
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index2.default.Item, _extends({}, props, { pageText: child })));
      (0, _chai.expect)(wrapper.html()).to.eql('<li class="' + styles['pagination-item'] + '"><a class="' + styles['pagination-link'] + '" href="#"><strong>1</strong></a></li>');
    });
  });
});