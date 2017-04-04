'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _chai = require('chai');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @test {Suggestions} */
describe('Suggestions component', function () {
  /** @test {Suggestions#render} */
  describe('#render', function () {
    it('render correctly', function () {
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, null));
      (0, _chai.expect)(wrapper.length).to.equal(1);
    });
  });
});