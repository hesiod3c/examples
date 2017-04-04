'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.dontMock('./index');

/** @test {FormGroup} */
describe('FormGroup component', function () {
  /** @test {Button#render} */
  describe('#render', function () {
    it('renders correctly', function () {
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, null));
      expect(wrapper.length).toEqual(1);
    });
  });
});