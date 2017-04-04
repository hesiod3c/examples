'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {};


jest.dontMock('./index');

/** @test {Form} */
describe('Form component', function () {
  /** @test {Form#render} */
  describe('#render', function () {
    it('renders correctly', function () {
      expect((0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { onSubmit: function onSubmit() {} })).length).toEqual(1);
    });
  });

  /** @test {Form#style} */
  describe('#style', function () {
    it('inline', function () {
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { onSubmit: function onSubmit() {}, style: 'inline' }));
      expect(wrapper.hasClass(styles.inline)).toEqual(true);
    });
    it('horizontal', function () {
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { onSubmit: function onSubmit() {}, style: 'horizontal' }));
      expect(wrapper.hasClass(styles.horizontal)).toEqual(true);
    });
  });
});