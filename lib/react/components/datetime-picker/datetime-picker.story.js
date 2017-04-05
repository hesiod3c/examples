'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _storybookAddonKnobs = require('@kadira/storybook-addon-knobs');

var _datetimePickerComponent = require('./datetime-picker-component');

var _datetimePickerComponent2 = _interopRequireDefault(_datetimePickerComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _storybook.storiesOf)('DatetimePicker', module);

stories.addDecorator(_storybookAddonKnobs.withKnobs);

stories.addWithInfo('Normal', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_datetimePickerComponent2.default, {
      dateFormat: 'DD/MM/YYYY',
      timeFormat: 'H:mm',
      locale: 'pt-br',
      placeholder: 'Completo',
      closeOnSelect: true
    }),
    _react2.default.createElement('br', null),
    _react2.default.createElement(_datetimePickerComponent2.default, {
      dateFormat: 'DD/MM/YYYY',
      timeFormat: false,
      locale: 'pt-br',
      placeholder: 'Apenas Data',
      closeOnSelect: true
    }),
    _react2.default.createElement('br', null),
    _react2.default.createElement(_datetimePickerComponent2.default, {
      dateFormat: 'MM/YYYY',
      timeFormat: false,
      locale: 'pt-br',
      placeholder: 'Apenas m\xEAs e ano',
      viewMode: 'months',
      closeOnSelect: true
    }),
    _react2.default.createElement('br', null),
    _react2.default.createElement(_datetimePickerComponent2.default, {
      dateFormat: 'YYYY',
      timeFormat: false,
      locale: 'pt-br',
      placeholder: 'Apenas ano',
      viewMode: 'years',
      closeOnSelect: true
    }),
    _react2.default.createElement('br', null),
    _react2.default.createElement(_datetimePickerComponent2.default, {
      dateFormat: false,
      timeFormat: 'H:mm',
      locale: 'pt-br',
      placeholder: 'Apenas hora e minuto',
      viewMode: 'time',
      closeOnSelect: true
    })
  );
});