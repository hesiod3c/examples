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

/** @test {List} */

describe('List component', function () {

  /** @test {List#render} */
  describe('#render', function () {

    it('render correctly', function () {
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
        _index2.default,
        null,
        _react2.default.createElement(_index2.default.Item, null)
      ));
      (0, _chai.expect)(wrapper.find('li')).to.exists;
    });
  });

  /** @test {List#style} */
  describe('#style', function () {
    it('should have an bordered style', function () {
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
        _index2.default,
        { style: 'bordered' },
        _react2.default.createElement(_index2.default.Item, null)
      ));
      (0, _chai.expect)(wrapper.find(styles.bordered)).to.exists;
    });
  });

  /** @test {List#style} */
  describe('#type', function () {
    it('should have an type disc', function () {
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
        _index2.default,
        { type: 'disc' },
        _react2.default.createElement(_index2.default.Item, null)
      ));

      (0, _chai.expect)(wrapper.find(styles.disc)).to.exists;
    });

    it('should have an type circle', function () {
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
        _index2.default,
        { type: 'circle' },
        _react2.default.createElement(_index2.default.Item, null)
      ));
      (0, _chai.expect)(wrapper.find(styles.circle)).to.exists;
    });

    it('should have an type decimal', function () {
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
        _index2.default,
        { type: 'decimal' },
        _react2.default.createElement(_index2.default.Item, null)
      ));
      (0, _chai.expect)(wrapper.find(styles.decimal)).to.exists;
    });
  });
});