'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _chai = require('chai');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.dontMock('./index');

/** @test {FormLabel} */
describe('FormLabel component', function () {
  /** @test {FormLabel#render} */
  describe('#render', function () {
    it('renders correctly', function () {
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
        _index2.default,
        null,
        'Nome:'
      ));
      (0, _chai.expect)(wrapper.length).to.equal(1);
    });
  });
});