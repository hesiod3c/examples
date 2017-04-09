'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _storybookAddonKnobs = require('@kadira/storybook-addon-knobs');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _storybook.storiesOf)('Svg', module);

stories.addDecorator(_storybookAddonKnobs.withKnobs);

stories.addWithInfo('Normal', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_index2.default, { name: 'logo/acom' }),
    _react2.default.createElement(_index2.default, { name: 'logo/suba' }),
    _react2.default.createElement(_index2.default, { name: 'logo/shop' }),
    _react2.default.createElement(_index2.default, { name: 'logo/soub' }),
    _react2.default.createElement(_index2.default, null),
    _react2.default.createElement(_index2.default, { name: 'icon/bars' }),
    _react2.default.createElement(_index2.default, { name: 'icon/arrows-alt' }),
    _react2.default.createElement(_index2.default, { name: 'icon/close' }),
    _react2.default.createElement(_index2.default, { name: 'icon/search' }),
    _react2.default.createElement(_index2.default, { name: 'icon/sort-desc' }),
    _react2.default.createElement(_index2.default, { name: 'icon/sort-asc' }),
    _react2.default.createElement(_index2.default, { name: 'icon/cog' }),
    _react2.default.createElement(_index2.default, { name: 'icon/book' }),
    _react2.default.createElement(_index2.default, { name: 'icon/image' }),
    _react2.default.createElement(_index2.default, { name: 'icon/table' }),
    _react2.default.createElement(_index2.default, { name: 'icon/plus' }),
    _react2.default.createElement(_index2.default, { name: 'icon/copy' }),
    _react2.default.createElement(_index2.default, { name: 'icon/pause' }),
    _react2.default.createElement(_index2.default, { name: 'icon/play' }),
    _react2.default.createElement(_index2.default, { name: 'icon/edit' }),
    _react2.default.createElement(_index2.default, { name: 'icon/trash' }),
    _react2.default.createElement(_index2.default, { name: 'icon/hourglass-2' }),
    _react2.default.createElement(_index2.default, { name: 'icon/chain' }),
    _react2.default.createElement(_index2.default, { name: 'icon/question' }),
    _react2.default.createElement(_index2.default, { name: 'icon/tag' }),
    _react2.default.createElement(_index2.default, { name: 'icon/th' }),
    _react2.default.createElement(_index2.default, { name: 'icon/home' }),
    _react2.default.createElement(_index2.default, { name: 'icon/warning' }),
    _react2.default.createElement(_index2.default, { name: 'icon/check' }),
    _react2.default.createElement(_index2.default, { name: 'icon/exit' }),
    _react2.default.createElement(_index2.default, { name: 'icon/info-circle' }),
    _react2.default.createElement(_index2.default, { name: 'icon/shield' }),
    _react2.default.createElement(_index2.default, { name: 'icon/calendar' })
  );
});

stories.addWithInfo('Size', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_index2.default, { size: '4rem' }),
    _react2.default.createElement(_index2.default, { size: '4rem', name: 'icon/bars' }),
    _react2.default.createElement(_index2.default, { size: '4rem', name: 'icon/arrows-alt' }),
    _react2.default.createElement(_index2.default, { size: '4rem', name: 'icon/close' }),
    _react2.default.createElement(_index2.default, { size: '4rem', name: 'icon/search' }),
    _react2.default.createElement(_index2.default, { size: '4rem', name: 'icon/sort-desc' }),
    _react2.default.createElement(_index2.default, { size: '4rem', name: 'icon/sort-asc' }),
    _react2.default.createElement(_index2.default, { size: '4rem', name: 'icon/cog' }),
    _react2.default.createElement(_index2.default, { size: '4rem', name: 'icon/book' }),
    _react2.default.createElement(_index2.default, { size: '4rem', name: 'icon/image' }),
    _react2.default.createElement(_index2.default, { size: '4rem', name: 'icon/table' }),
    _react2.default.createElement(_index2.default, { size: '4rem', name: 'icon/plus' }),
    _react2.default.createElement(_index2.default, { size: '4rem', name: 'icon/copy' }),
    _react2.default.createElement(_index2.default, { size: '4rem', name: 'icon/pause' }),
    _react2.default.createElement(_index2.default, { size: '4rem', name: 'icon/play' }),
    _react2.default.createElement(_index2.default, { size: '4rem', name: 'icon/edit' }),
    _react2.default.createElement(_index2.default, { size: '4rem', name: 'icon/trash' }),
    _react2.default.createElement(_index2.default, { size: '4rem', name: 'icon/hourglass-2' }),
    _react2.default.createElement(_index2.default, { size: '4rem', name: 'icon/chain' }),
    _react2.default.createElement(_index2.default, { size: '4rem', name: 'icon/question' }),
    _react2.default.createElement(_index2.default, { size: '4rem', name: 'icon/tag' }),
    _react2.default.createElement(_index2.default, { size: '4rem', name: 'icon/th' }),
    _react2.default.createElement(_index2.default, { size: '4rem', name: 'icon/home' }),
    _react2.default.createElement(_index2.default, { size: '4rem', name: 'icon/warning' }),
    _react2.default.createElement(_index2.default, { size: '4rem', name: 'icon/check' }),
    _react2.default.createElement(_index2.default, { size: '4rem', name: 'icon/exit' }),
    _react2.default.createElement(_index2.default, { size: '4rem', name: 'icon/info-circle' }),
    _react2.default.createElement(_index2.default, { size: '4rem', name: 'icon/shield' }),
    _react2.default.createElement(_index2.default, { size: '4rem', name: 'icon/calendar' })
  );
});

stories.addWithInfo('Color', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_index2.default, { color: '#ffcc00' }),
    _react2.default.createElement(_index2.default, { color: '#ffcc00', name: 'icon/bars' }),
    _react2.default.createElement(_index2.default, { color: '#ffcc00', name: 'icon/arrows-alt' }),
    _react2.default.createElement(_index2.default, { color: '#ffcc00', name: 'icon/close' }),
    _react2.default.createElement(_index2.default, { color: '#ffcc00', name: 'icon/search' }),
    _react2.default.createElement(_index2.default, { color: '#ffcc00', name: 'icon/sort-desc' }),
    _react2.default.createElement(_index2.default, { color: '#ffcc00', name: 'icon/sort-asc' }),
    _react2.default.createElement(_index2.default, { color: '#ffcc00', name: 'icon/cog' }),
    _react2.default.createElement(_index2.default, { color: '#ffcc00', name: 'icon/book' }),
    _react2.default.createElement(_index2.default, { color: '#ffcc00', name: 'icon/image' }),
    _react2.default.createElement(_index2.default, { color: '#ffcc00', name: 'icon/table' }),
    _react2.default.createElement(_index2.default, { color: '#ffcc00', name: 'icon/plus' }),
    _react2.default.createElement(_index2.default, { color: '#ffcc00', name: 'icon/copy' }),
    _react2.default.createElement(_index2.default, { color: '#ffcc00', name: 'icon/pause' }),
    _react2.default.createElement(_index2.default, { color: '#ffcc00', name: 'icon/play' }),
    _react2.default.createElement(_index2.default, { color: '#ffcc00', name: 'icon/edit' }),
    _react2.default.createElement(_index2.default, { color: '#ffcc00', name: 'icon/trash' }),
    _react2.default.createElement(_index2.default, { color: '#ffcc00', name: 'icon/hourglass-2' }),
    _react2.default.createElement(_index2.default, { color: '#ffcc00', name: 'icon/chain' }),
    _react2.default.createElement(_index2.default, { color: '#ffcc00', name: 'icon/question' }),
    _react2.default.createElement(_index2.default, { color: '#ffcc00', name: 'icon/tag' }),
    _react2.default.createElement(_index2.default, { color: '#ffcc00', name: 'icon/th' }),
    _react2.default.createElement(_index2.default, { color: '#ffcc00', name: 'icon/home' }),
    _react2.default.createElement(_index2.default, { color: '#ffcc00', name: 'icon/warning' }),
    _react2.default.createElement(_index2.default, { color: '#ffcc00', name: 'icon/check' }),
    _react2.default.createElement(_index2.default, { color: '#ffcc00', name: 'icon/exit' }),
    _react2.default.createElement(_index2.default, { color: '#ffcc00', name: 'icon/info-circle' }),
    _react2.default.createElement(_index2.default, { color: '#ffcc00', name: 'icon/shield' }),
    _react2.default.createElement(_index2.default, { color: '#ffcc00', name: 'icon/calendar' })
  );
});