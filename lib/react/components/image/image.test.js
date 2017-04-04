'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _chai = require('chai');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.dontMock('./index');

var styles = {
  'center': 'image_center_3867z',
  'right': 'image_right_m0cmg',
  'small': 'image_small_FOZp0',
  'medium': 'image_medium_2U4td',
  'large': 'image_large_1ImzR',
  'circle': 'image_circle_2uMZP',
  'rounded': 'image_rounded_7DaiG',
  'thumbnail': 'image_thumbnail_26rCn'
};

/** @test {Image} */

describe('Image component', function () {
  var pathImage = 'https://placeholdit.imgix.net/~text?txtsize=13&txt=image&w=100&h=100';
  /** @test {Image#render} */
  describe('#render', function () {

    it('render correctly', function () {
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { path: pathImage }));
      (0, _chai.expect)(wrapper.find('img')).to.exists;
    });

    it('render incorrectly', function () {
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { path: '' }));
      (0, _chai.expect)(wrapper.find('img')).to.not.exists;
    });

    it('should have default props', function () {
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { path: pathImage }));
      (0, _chai.expect)(wrapper.props().size).to.be.defined;
      (0, _chai.expect)(wrapper.props().align).to.be.defined;
    });
  });

  /** @test {Image#size} */
  describe('#size', function () {
    it('should have an default size', function () {
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index2.default, { path: pathImage }));
      (0, _chai.expect)(wrapper.props().size).to.equal('medium');
    });

    it('should have a valid size', function () {
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { size: 'small', path: pathImage }));
      (0, _chai.expect)(wrapper.find('.' + styles.small)).to.exists;
    });
  });

  /** @test {Image#align} */
  describe('#align', function () {
    it('should have an default align', function () {
      var wrapper = (0, _enzyme.mount)(_react2.default.createElement(_index2.default, { path: pathImage }));
      (0, _chai.expect)(wrapper.props().align).to.equal('left');
    });

    it('should have a valid align', function () {
      var wrapper = (0, _enzyme.shallow)(_react2.default.createElement(_index2.default, { align: 'center', path: pathImage }));
      (0, _chai.expect)(wrapper.find('.' + styles.center)).to.exists;
    });
  });
});