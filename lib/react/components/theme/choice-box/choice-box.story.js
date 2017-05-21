'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _storybookAddonKnobs = require('@kadira/storybook-addon-knobs');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _storybook.storiesOf)('ChoiceBox', module);

stories.addDecorator(_storybookAddonKnobs.withKnobs);

stories.addWithInfo('Normal', function () {
  return _react2.default.createElement(_index2.default, {
    header: 'Op\xE7\xF5es',
    description: 'v\xE1rias op\xE7\xF5es',
    placeholder: 'Cadastre ou busque a op\xE7\xE3o',
    onClick: (0, _storybook.action)('onCadastre'),
    options: [{ name: 'label 1', slug: 'label-1', checked: true }, { name: 'label 2', slug: 'label-2' }],
    tags: ['label-1'],
    onToggle: (0, _storybook.action)('onToggle'),
    onRemove: (0, _storybook.action)('onRemove'),
    onDelete: (0, _storybook.action)('onDelete'),
    onInputChange: (0, _storybook.action)('onInputChange'),
    allowCreate: true,
    allowDelete: true
  });
});