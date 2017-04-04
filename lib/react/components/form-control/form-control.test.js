'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _chai = require('chai');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.dontMock('./index');

/** @test {FormControl} */
describe('FormControl component', function () {
  /** @test {FormControl#render} */
  describe('#render', function () {
    it('renders correctly', function () {
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, null));
      (0, _chai.expect)(wrapper.length).to.equal(1);
    });
  });

  /** @test {FormControl#type} */
  describe('#type', function () {
    it('placeholder and type', function () {
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index2.default, { placeholder: 'Digite um nome' }));
      (0, _chai.expect)(wrapper.prop('placeholder')).to.equal("Digite um nome");
      (0, _chai.expect)(wrapper.prop('type')).to.equal("text");
    });

    it('type search', function () {
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index2.default, { type: 'search' }));
      (0, _chai.expect)(wrapper.prop('type')).to.equal("search");
    });

    it('type textarea', function () {
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index2.default, { type: 'textarea' }));
      (0, _chai.expect)(wrapper.prop('type')).to.equal("textarea");
    });

    it('type select', function () {
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index2.default, { type: 'select' }));
      (0, _chai.expect)(wrapper.prop('type')).to.equal("select");
    });
  });
});