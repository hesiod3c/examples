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
/** @test {Button} */

describe('Button component', function () {

  /** @test {Button#render} */
  describe('#render', function () {

    it('render correctly', function () {
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
        _index2.default,
        null,
        'Text'
      ));
      (0, _chai.expect)(wrapper.find('button')).to.exists;
    });

    it('render incorrectly', function () {
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, null));
      (0, _chai.expect)(wrapper.find('button')).to.not.exists;
    });

    it('should have a text children', function () {
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
        _index2.default,
        null,
        'Text'
      ));
      (0, _chai.expect)(wrapper.text()).to.equal('Text');
    });

    it('should have default props', function () {
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
        _index2.default,
        null,
        'Text'
      ));
      (0, _chai.expect)(wrapper.props().style).to.be.defined;
      (0, _chai.expect)(wrapper.props().size).to.be.defined;
      (0, _chai.expect)(wrapper.props().type).to.be.defined;
    });
  });

  /** @test {Button#type} */
  describe('#type', function () {
    it('should have an default type', function () {
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
        _index2.default,
        null,
        'Text'
      ));
      (0, _chai.expect)(wrapper.props().type).to.equal('button');
    });
  });

  /** @test {Button#size} */
  describe('#size', function () {
    it('should have an default size', function () {
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
        _index2.default,
        null,
        'Text'
      ));
      (0, _chai.expect)(wrapper.props().size).to.equal('medium');
    });

    it('should have a valid size', function () {
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
        _index2.default,
        { size: 'mini' },
        'Text'
      ));
      (0, _chai.expect)(wrapper.find(styles.mini)).to.exists;
    });
  });

  /** @test {Button#style} */
  describe('#style', function () {
    it('should have an default style', function () {
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
        _index2.default,
        null,
        'Text'
      ));
      (0, _chai.expect)(wrapper.props().style).to.equal('default');
    });

    it('should have a valid style', function () {
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(
        _index2.default,
        { style: 'primary' },
        'Text'
      ));
      (0, _chai.expect)(wrapper.find(styles.primary)).to.exists;
    });
  });

  /** @test {Button#active} */
  describe('#active', function () {
    it('should have an default active', function () {
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
        _index2.default,
        null,
        'Text'
      ));
      (0, _chai.expect)(wrapper.props().active).to.equal(false);
    });

    it('has active', function () {
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
        _index2.default,
        { active: true },
        'Text'
      ));
      (0, _chai.expect)(wrapper.props().active).to.equal(true);
    });
  });

  /** @test {Button#block} */
  describe('#block', function () {
    it('should have an default block', function () {
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
        _index2.default,
        null,
        'Text'
      ));
      (0, _chai.expect)(wrapper.props().block).to.equal(false);
    });

    it('has block', function () {
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
        _index2.default,
        { block: true },
        'Text'
      ));
      (0, _chai.expect)(wrapper.props().block).to.equal(true);
    });
  });

  /** @test {Button#disabled} */
  describe('#disabled', function () {
    it('should have an default disabled', function () {
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
        _index2.default,
        null,
        'Text'
      ));
      (0, _chai.expect)(wrapper.props().disabled).to.equal(false);
    });

    it('has disabled', function () {
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(
        _index2.default,
        { disabled: true },
        'Text'
      ));
      (0, _chai.expect)(wrapper.props().disabled).to.equal(true);
    });
  });
});