'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _storybookAddonKnobs = require('@kadira/storybook-addon-knobs');

var _tagsInputComponent = require('./tags-input-component');

var _tagsInputComponent2 = _interopRequireDefault(_tagsInputComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _storybook.storiesOf)('TagsInput', module);

stories.addDecorator(_storybookAddonKnobs.withKnobs);

var options = ['aaaa'];

stories.addWithInfo('Normal', function () {
  return _react2.default.createElement(_tagsInputComponent2.default, {
    inputProps: {
      placeholder: 'Digite os termos'
    },
    onChange: (0, _storybook.action)('changed'),
    value: options
  });
});