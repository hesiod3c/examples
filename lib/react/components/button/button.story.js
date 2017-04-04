'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _storybookAddonKnobs = require('@kadira/storybook-addon-knobs');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _svgIcon = require('../svg-icon');

var _svgIcon2 = _interopRequireDefault(_svgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _storybook.storiesOf)('Button', module);

stories.addDecorator(_storybookAddonKnobs.withKnobs);

stories.addWithInfo('Style', '\n    This is the basic usage with the button.\n  ', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _index2.default,
      { onClick: (0, _storybook.action)('clicked') },
      'Default'
    ),
    '\xA0',
    _react2.default.createElement(
      _index2.default,
      { style: 'primary' },
      'Primary'
    ),
    '\xA0',
    _react2.default.createElement(
      _index2.default,
      { style: 'success' },
      'Success'
    ),
    '\xA0',
    _react2.default.createElement(
      _index2.default,
      { style: 'info' },
      'Info'
    ),
    '\xA0',
    _react2.default.createElement(
      _index2.default,
      { style: 'warning' },
      'Warning'
    ),
    '\xA0',
    _react2.default.createElement(
      _index2.default,
      { style: 'danger' },
      'Danger'
    ),
    '\xA0',
    _react2.default.createElement(
      _index2.default,
      { style: 'transparent', size: 'none' },
      _react2.default.createElement(_svgIcon2.default, null)
    ),
    '\xA0'
  );
});

stories.addWithInfo('Size', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _index2.default,
      { size: 'mini' },
      'Mini'
    ),
    '\xA0',
    _react2.default.createElement(
      _index2.default,
      { size: 'small' },
      'Small'
    ),
    '\xA0',
    _react2.default.createElement(
      _index2.default,
      null,
      'Medium'
    ),
    '\xA0',
    _react2.default.createElement(
      _index2.default,
      { size: 'large' },
      'Large'
    ),
    '\xA0',
    _react2.default.createElement(
      _index2.default,
      { style: 'primary', size: 'large' },
      'Large'
    ),
    '\xA0',
    _react2.default.createElement(
      _index2.default,
      { style: 'primary' },
      'Medium'
    ),
    '\xA0',
    _react2.default.createElement(
      _index2.default,
      { style: 'primary', size: 'small' },
      'Small'
    ),
    '\xA0',
    _react2.default.createElement(
      _index2.default,
      { style: 'primary', size: 'mini' },
      'Mini'
    ),
    '\xA0'
  );
});

stories.addWithInfo('Outline', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _index2.default,
      { outline: true },
      'Default'
    ),
    '\xA0',
    _react2.default.createElement(
      _index2.default,
      { style: 'primary', outline: true },
      'Primary'
    ),
    '\xA0',
    _react2.default.createElement(
      _index2.default,
      { style: 'success', outline: true },
      'Success'
    ),
    '\xA0',
    _react2.default.createElement(
      _index2.default,
      { style: 'info', outline: true },
      'Info'
    ),
    '\xA0',
    _react2.default.createElement(
      _index2.default,
      { style: 'warning', outline: true },
      'Warning'
    ),
    '\xA0',
    _react2.default.createElement(
      _index2.default,
      { style: 'danger', outline: true },
      'Danger'
    ),
    '\xA0'
  );
});

stories.addWithInfo('Active', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _index2.default,
      { active: true },
      'Default'
    ),
    '\xA0',
    _react2.default.createElement(
      _index2.default,
      { style: 'primary', active: true },
      'Primary'
    ),
    '\xA0',
    _react2.default.createElement(
      _index2.default,
      { style: 'success', active: true },
      'Success'
    ),
    '\xA0',
    _react2.default.createElement(
      _index2.default,
      { style: 'info', active: true },
      'Info'
    ),
    '\xA0',
    _react2.default.createElement(
      _index2.default,
      { style: 'warning', active: true },
      'Warning'
    ),
    '\xA0',
    _react2.default.createElement(
      _index2.default,
      { style: 'danger', active: true },
      'Danger'
    ),
    '\xA0'
  );
});

stories.addWithInfo('Block', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _index2.default,
      { block: true },
      'Default'
    ),
    '\xA0',
    _react2.default.createElement(
      _index2.default,
      { style: 'primary', block: true },
      'Primary'
    ),
    '\xA0',
    _react2.default.createElement(
      _index2.default,
      { style: 'success', block: true },
      'Success'
    ),
    '\xA0',
    _react2.default.createElement(
      _index2.default,
      { style: 'info', block: true },
      'Info'
    ),
    '\xA0',
    _react2.default.createElement(
      _index2.default,
      { style: 'warning', block: true },
      'Warning'
    ),
    '\xA0',
    _react2.default.createElement(
      _index2.default,
      { style: 'danger', block: true },
      'Danger'
    ),
    '\xA0'
  );
});

stories.addWithInfo('With icon', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _index2.default,
      null,
      _react2.default.createElement(_svgIcon2.default, null),
      ' Default'
    ),
    '\xA0',
    _react2.default.createElement(
      _index2.default,
      { style: 'primary' },
      _react2.default.createElement(_svgIcon2.default, null),
      ' Primary'
    ),
    '\xA0',
    _react2.default.createElement(
      _index2.default,
      { style: 'success' },
      'Success ',
      _react2.default.createElement(_svgIcon2.default, null)
    ),
    '\xA0',
    _react2.default.createElement(
      _index2.default,
      { style: 'info' },
      _react2.default.createElement(_svgIcon2.default, null),
      ' Info ',
      _react2.default.createElement(_svgIcon2.default, null)
    ),
    '\xA0',
    _react2.default.createElement(
      _index2.default,
      { style: 'warning', outline: true },
      _react2.default.createElement(_svgIcon2.default, null),
      ' Warning'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _index2.default,
      { style: 'danger', block: true },
      _react2.default.createElement(_svgIcon2.default, null),
      ' Danger'
    ),
    '\xA0'
  );
});

stories.addWithInfo('SvgIcon with circle style', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _index2.default,
      { size: 'mini', circle: true },
      _react2.default.createElement(_svgIcon2.default, { size: '14px' })
    ),
    '\xA0',
    _react2.default.createElement(
      _index2.default,
      { size: 'mini', circle: true },
      _react2.default.createElement(_svgIcon2.default, null)
    ),
    '\xA0',
    _react2.default.createElement(
      _index2.default,
      { size: 'mini', circle: true },
      _react2.default.createElement(_svgIcon2.default, { size: '36px' })
    ),
    '\xA0',
    _react2.default.createElement(
      _index2.default,
      { size: 'mini', circle: true },
      _react2.default.createElement(_svgIcon2.default, { size: '50px' })
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _index2.default,
      { style: 'primary', size: 'small', circle: true },
      _react2.default.createElement(_svgIcon2.default, { size: '14px' })
    ),
    '\xA0',
    _react2.default.createElement(
      _index2.default,
      { style: 'primary', size: 'small', circle: true },
      _react2.default.createElement(_svgIcon2.default, null)
    ),
    '\xA0',
    _react2.default.createElement(
      _index2.default,
      { style: 'primary', size: 'small', circle: true },
      _react2.default.createElement(_svgIcon2.default, { size: '36px' })
    ),
    '\xA0',
    _react2.default.createElement(
      _index2.default,
      { style: 'primary', size: 'small', circle: true },
      _react2.default.createElement(_svgIcon2.default, { size: '50px' })
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _index2.default,
      { style: 'success', circle: true },
      _react2.default.createElement(_svgIcon2.default, { size: '14px' })
    ),
    '\xA0',
    _react2.default.createElement(
      _index2.default,
      { style: 'success', circle: true },
      _react2.default.createElement(_svgIcon2.default, null)
    ),
    '\xA0',
    _react2.default.createElement(
      _index2.default,
      { style: 'success', circle: true },
      _react2.default.createElement(_svgIcon2.default, { size: '36px' })
    ),
    '\xA0',
    _react2.default.createElement(
      _index2.default,
      { style: 'success', circle: true },
      _react2.default.createElement(_svgIcon2.default, { size: '50px' })
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _index2.default,
      { style: 'info', size: 'large', circle: true },
      _react2.default.createElement(_svgIcon2.default, { size: '14px' })
    ),
    '\xA0',
    _react2.default.createElement(
      _index2.default,
      { style: 'info', size: 'large', circle: true },
      _react2.default.createElement(_svgIcon2.default, null)
    ),
    '\xA0',
    _react2.default.createElement(
      _index2.default,
      { style: 'info', size: 'large', circle: true },
      _react2.default.createElement(_svgIcon2.default, { size: '36px' })
    ),
    '\xA0',
    _react2.default.createElement(
      _index2.default,
      { style: 'info', size: 'large', circle: true },
      _react2.default.createElement(_svgIcon2.default, { size: '50px' })
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _index2.default,
      { style: 'warning', size: 'large', circle: true },
      _react2.default.createElement(_svgIcon2.default, null)
    ),
    '\xA0',
    _react2.default.createElement(
      _index2.default,
      { style: 'danger', size: 'large', circle: true },
      _react2.default.createElement(_svgIcon2.default, null)
    ),
    '\xA0'
  );
});

stories.addWithInfo('Rounded', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _index2.default,
      { rounded: true },
      'Default'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _index2.default,
      { style: 'primary', rounded: true },
      _react2.default.createElement(_svgIcon2.default, null)
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _index2.default,
      { style: 'success', rounded: true },
      _react2.default.createElement(_svgIcon2.default, null),
      ' Success'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _index2.default,
      { style: 'info', disabled: true, rounded: true },
      'Info'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _index2.default,
      { style: 'warning', outline: true, rounded: true },
      'Warning'
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _index2.default,
      { style: 'danger', block: true, rounded: true },
      'Danger'
    )
  );
});

stories.addWithInfo('Disabled', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _index2.default,
      { disabled: (0, _storybookAddonKnobs.boolean)('Disabled', false) },
      (0, _storybookAddonKnobs.text)('Text (default)', 'Default')
    ),
    '\xA0',
    _react2.default.createElement(
      _index2.default,
      { style: 'primary', disabled: (0, _storybookAddonKnobs.boolean)('Disabled', false) },
      (0, _storybookAddonKnobs.text)('Text (primary)', 'Primary')
    ),
    '\xA0',
    _react2.default.createElement(
      _index2.default,
      { style: 'info', disabled: (0, _storybookAddonKnobs.boolean)('Disabled', false), rounded: true },
      (0, _storybookAddonKnobs.text)('Text (rounded)', 'Rounded')
    ),
    '\xA0',
    _react2.default.createElement(
      _index2.default,
      { style: 'warning', disabled: (0, _storybookAddonKnobs.boolean)('Disabled', false), outline: true },
      (0, _storybookAddonKnobs.text)('Text (outline)', 'Outline')
    ),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _index2.default,
      { style: 'danger', disabled: (0, _storybookAddonKnobs.boolean)('Disabled', false), block: true },
      (0, _storybookAddonKnobs.text)('Text (block)', 'Outline')
    )
  );
});

stories.addWithInfo('Loading', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _index2.default,
      { loading: (0, _storybookAddonKnobs.boolean)('Loading', false) },
      (0, _storybookAddonKnobs.text)('Text (default)', 'Default')
    ),
    '\xA0'
  );
});