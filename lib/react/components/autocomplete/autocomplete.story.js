'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _storybookAddonKnobs = require('@kadira/storybook-addon-knobs');

var _autocompleteComponent = require('./autocomplete-component');

var _autocompleteComponent2 = _interopRequireDefault(_autocompleteComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _storybook.storiesOf)('Autocomplete', module);

stories.addDecorator(_storybookAddonKnobs.withKnobs);

var options = [{ value: 'Red', label: 'Red' }, { value: 'Green', label: 'Green' }, { value: 'Blue', label: 'Blue' }];

stories.addWithInfo('Normal', function () {
  return _react2.default.createElement(_autocompleteComponent2.default, {
    options: options,
    onChange: (0, _storybook.action)('changed'),
    value: (0, _storybookAddonKnobs.text)('Value', '')
  });
});