'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _testUtils = require('react-dom/test-utils');

var _testUtils2 = _interopRequireDefault(_testUtils);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

jest.dontMock('./index');

var findByTag = _testUtils2.default.findRenderedDOMComponentWithTag;
var renderComponent = function renderComponent(props) {
  return _testUtils2.default.renderIntoDocument(_react2.default.createElement(_index2.default, props));
};

describe('Svg component', function () {
  it('should have a svg', function () {
    var target = renderComponent();
    var svg = findByTag(target, 'svg');
    expect(svg.childNodes[3].tagName).toEqual('path');
  });
});