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

/** @test {panel} */

describe('Panel component', function () {

  /** @test {Panel#render} */
  describe('#render', function () {
    var textExample = '<p> Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.</p>';

    it('render correctly', function () {
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
        _index2.default,
        { header: 'test' },
        textExample
      ));
      (0, _chai.expect)(wrapper.find('p')).to.exists;
    });

    it('render header footer', function () {
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
        _index2.default,
        { header: 'test', footer: 'test' },
        textExample
      ));
      (0, _chai.expect)(wrapper.find('header')).to.exists;
      (0, _chai.expect)(wrapper.find('footer')).to.exists;
    });

    it('render scroll', function () {
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
        _index2.default,
        { header: 'test', scroll: true },
        textExample
      ));
      (0, _chai.expect)(wrapper.find('.' + styles.scroll)).to.exists;
    });
  });
});