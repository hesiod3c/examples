'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _storybookAddonKnobs = require('@kadira/storybook-addon-knobs');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _storybook.storiesOf)('Icon', module);

stories.addDecorator(_storybookAddonKnobs.withKnobs);

stories.addWithInfo('Normal', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_index2.default, null),
    _react2.default.createElement(_index2.default, { name: 'bars' }),
    _react2.default.createElement(_index2.default, { name: 'arrows-alt' }),
    _react2.default.createElement(_index2.default, { name: 'close' }),
    _react2.default.createElement(_index2.default, { name: 'search' }),
    _react2.default.createElement(_index2.default, { name: 'sort-desc' }),
    _react2.default.createElement(_index2.default, { name: 'sort-asc' }),
    _react2.default.createElement(_index2.default, { name: 'cog' }),
    _react2.default.createElement(_index2.default, { name: 'book' }),
    _react2.default.createElement(_index2.default, { name: 'image' }),
    _react2.default.createElement(_index2.default, { name: 'table' }),
    _react2.default.createElement(_index2.default, { name: 'plus' }),
    _react2.default.createElement(_index2.default, { name: 'copy' }),
    _react2.default.createElement(_index2.default, { name: 'pause' }),
    _react2.default.createElement(_index2.default, { name: 'play' }),
    _react2.default.createElement(_index2.default, { name: 'edit' }),
    _react2.default.createElement(_index2.default, { name: 'trash' }),
    _react2.default.createElement(_index2.default, { name: 'hourglass-2' }),
    _react2.default.createElement(_index2.default, { name: 'chain' }),
    _react2.default.createElement(_index2.default, { name: 'question' }),
    _react2.default.createElement(_index2.default, { name: 'tag' }),
    _react2.default.createElement(_index2.default, { name: 'th' }),
    _react2.default.createElement(_index2.default, { name: 'home' }),
    _react2.default.createElement(_index2.default, { name: 'warning' }),
    _react2.default.createElement(_index2.default, { name: 'check' }),
    _react2.default.createElement(_index2.default, { name: 'exit' }),
    _react2.default.createElement(_index2.default, { name: 'info-circle' }),
    _react2.default.createElement(_index2.default, { name: 'shield' }),
    _react2.default.createElement(_index2.default, { name: 'calendar' })
  );
});

stories.addWithInfo('Size', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_index2.default, { size: '4rem' }),
    _react2.default.createElement(_index2.default, { size: '4rem', name: 'bars' }),
    _react2.default.createElement(_index2.default, { size: '4rem', name: 'arrows-alt' }),
    _react2.default.createElement(_index2.default, { size: '4rem', name: 'close' }),
    _react2.default.createElement(_index2.default, { size: '4rem', name: 'search' }),
    _react2.default.createElement(_index2.default, { size: '4rem', name: 'sort-desc' }),
    _react2.default.createElement(_index2.default, { size: '4rem', name: 'sort-asc' }),
    _react2.default.createElement(_index2.default, { size: '4rem', name: 'cog' }),
    _react2.default.createElement(_index2.default, { size: '4rem', name: 'book' }),
    _react2.default.createElement(_index2.default, { size: '4rem', name: 'image' }),
    _react2.default.createElement(_index2.default, { size: '4rem', name: 'table' }),
    _react2.default.createElement(_index2.default, { size: '4rem', name: 'plus' }),
    _react2.default.createElement(_index2.default, { size: '4rem', name: 'copy' }),
    _react2.default.createElement(_index2.default, { size: '4rem', name: 'pause' }),
    _react2.default.createElement(_index2.default, { size: '4rem', name: 'play' }),
    _react2.default.createElement(_index2.default, { size: '4rem', name: 'edit' }),
    _react2.default.createElement(_index2.default, { size: '4rem', name: 'trash' }),
    _react2.default.createElement(_index2.default, { size: '4rem', name: 'hourglass-2' }),
    _react2.default.createElement(_index2.default, { size: '4rem', name: 'chain' }),
    _react2.default.createElement(_index2.default, { size: '4rem', name: 'question' }),
    _react2.default.createElement(_index2.default, { size: '4rem', name: 'tag' }),
    _react2.default.createElement(_index2.default, { size: '4rem', name: 'th' }),
    _react2.default.createElement(_index2.default, { size: '4rem', name: 'home' }),
    _react2.default.createElement(_index2.default, { size: '4rem', name: 'warning' }),
    _react2.default.createElement(_index2.default, { size: '4rem', name: 'check' }),
    _react2.default.createElement(_index2.default, { size: '4rem', name: 'exit' }),
    _react2.default.createElement(_index2.default, { size: '4rem', name: 'info-circle' }),
    _react2.default.createElement(_index2.default, { size: '4rem', name: 'shield' }),
    _react2.default.createElement(_index2.default, { size: '4rem', name: 'calendar' })
  );
});

stories.addWithInfo('Color', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_index2.default, { color: '#ffcc00' }),
    _react2.default.createElement(_index2.default, { color: '#ffcc00', name: 'bars' }),
    _react2.default.createElement(_index2.default, { color: '#ffcc00', name: 'arrows-alt' }),
    _react2.default.createElement(_index2.default, { color: '#ffcc00', name: 'close' }),
    _react2.default.createElement(_index2.default, { color: '#ffcc00', name: 'search' }),
    _react2.default.createElement(_index2.default, { color: '#ffcc00', name: 'sort-desc' }),
    _react2.default.createElement(_index2.default, { color: '#ffcc00', name: 'sort-asc' }),
    _react2.default.createElement(_index2.default, { color: '#ffcc00', name: 'cog' }),
    _react2.default.createElement(_index2.default, { color: '#ffcc00', name: 'book' }),
    _react2.default.createElement(_index2.default, { color: '#ffcc00', name: 'image' }),
    _react2.default.createElement(_index2.default, { color: '#ffcc00', name: 'table' }),
    _react2.default.createElement(_index2.default, { color: '#ffcc00', name: 'plus' }),
    _react2.default.createElement(_index2.default, { color: '#ffcc00', name: 'copy' }),
    _react2.default.createElement(_index2.default, { color: '#ffcc00', name: 'pause' }),
    _react2.default.createElement(_index2.default, { color: '#ffcc00', name: 'play' }),
    _react2.default.createElement(_index2.default, { color: '#ffcc00', name: 'edit' }),
    _react2.default.createElement(_index2.default, { color: '#ffcc00', name: 'trash' }),
    _react2.default.createElement(_index2.default, { color: '#ffcc00', name: 'hourglass-2' }),
    _react2.default.createElement(_index2.default, { color: '#ffcc00', name: 'chain' }),
    _react2.default.createElement(_index2.default, { color: '#ffcc00', name: 'question' }),
    _react2.default.createElement(_index2.default, { color: '#ffcc00', name: 'tag' }),
    _react2.default.createElement(_index2.default, { color: '#ffcc00', name: 'th' }),
    _react2.default.createElement(_index2.default, { color: '#ffcc00', name: 'home' }),
    _react2.default.createElement(_index2.default, { color: '#ffcc00', name: 'warning' }),
    _react2.default.createElement(_index2.default, { color: '#ffcc00', name: 'check' }),
    _react2.default.createElement(_index2.default, { color: '#ffcc00', name: 'exit' }),
    _react2.default.createElement(_index2.default, { color: '#ffcc00', name: 'info-circle' }),
    _react2.default.createElement(_index2.default, { color: '#ffcc00', name: 'shield' }),
    _react2.default.createElement(_index2.default, { color: '#ffcc00', name: 'calendar' })
  );
});