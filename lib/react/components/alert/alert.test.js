'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _chai = require('chai');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.dontMock('./index');

var styles = {};

/** @test {alert} */

describe('Alert component', function () {

  /** @test {Alert#render} */
  describe('#render', function () {
    var textExample = '<p> Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.</p>';

    it('render correctly', function () {
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
        _index2.default,
        null,
        textExample
      ));
      (0, _chai.expect)(wrapper.find('p')).to.exists;
    });

    it('render incorrectly', function () {
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, null));
      (0, _chai.expect)(wrapper.find('p')).to.not.exists;
    });

    it('render info alert', function () {
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
        _index2.default,
        { type: 'info' },
        textExample
      ));
      (0, _chai.expect)(wrapper.find('.' + styles.info)).to.exists;
    });
  });
});