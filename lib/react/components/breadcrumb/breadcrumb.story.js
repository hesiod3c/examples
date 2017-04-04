'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _storybook.storiesOf)('Breadcrumb', module);

stories.addWithInfo('basic', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _index2.default,
      null,
      _react2.default.createElement(_index2.default.Item, { text: 'teste 1', url: 'test url' }),
      _react2.default.createElement(_index2.default.Item, { text: 'teste 2' })
    ),
    _react2.default.createElement(
      _index2.default,
      null,
      _react2.default.createElement(_index2.default.Item, { text: 'teste 1', url: 'test url 1' }),
      _react2.default.createElement(_index2.default.Item, { text: 'teste 2', url: 'test url 2' }),
      _react2.default.createElement(_index2.default.Item, { text: 'teste 3' })
    )
  );
});