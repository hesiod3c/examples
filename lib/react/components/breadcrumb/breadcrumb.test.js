'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _chai = require('chai');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.dontMock('./index');

/** @test {Breadcrumb} */
describe('Alert component', function () {

  /** @test {Breadcrumb#render} */
  describe('#render', function () {

    it('render correctly', function () {
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
        _index2.default,
        null,
        _react2.default.createElement(_index2.default.Item, { text: 'teste 1', url: 'test url' }),
        _react2.default.createElement(_index2.default.Item, { text: 'teste 2' })
      ));
      (0, _chai.expect)(wrapper.find('a')).to.exists;
      (0, _chai.expect)(wrapper.find('strong')).to.exists;
    });

    it('render incorrectly', function () {
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, null));
      (0, _chai.expect)(wrapper.find('a')).to.not.exists;
      (0, _chai.expect)(wrapper.find('strong')).to.not.exists;
    });
  });
});