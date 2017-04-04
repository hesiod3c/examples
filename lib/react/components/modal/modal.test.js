'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _chai = require('chai');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var modal = {
  id: '' + new Date().getTime(),
  header: 'Termos de Segmenta\xE7\xE3o'
};

/** @test {Modal} */
describe('Modal component', function () {
  /** @test {Modal#render} */
  describe('#render', function () {
    it('render correctly', function () {
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { data: modal }));
      (0, _chai.expect)(wrapper.length).to.equal(1);
    });
  });
});