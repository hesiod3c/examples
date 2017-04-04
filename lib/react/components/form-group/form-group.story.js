'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _storybookAddonKnobs = require('@kadira/storybook-addon-knobs');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _formLabel = require('../form-label');

var _formLabel2 = _interopRequireDefault(_formLabel);

var _formControl = require('../form-control');

var _formControl2 = _interopRequireDefault(_formControl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _storybook.storiesOf)('FormGroup', module);

stories.addDecorator(_storybookAddonKnobs.withKnobs);

stories.addWithInfo('Normal', function () {
  return _react2.default.createElement(
    _index2.default,
    null,
    _react2.default.createElement(
      _formLabel2.default,
      null,
      'Nome:'
    ),
    _react2.default.createElement(_formControl2.default, { placeholder: 'Form group with input' })
  );
});

stories.addWithInfo('With id', function () {
  return _react2.default.createElement(
    _index2.default,
    { controlId: 'test' },
    _react2.default.createElement(
      _formLabel2.default,
      null,
      'Nome:'
    ),
    _react2.default.createElement(_formControl2.default, { placeholder: 'Form group with input' })
  );
});

stories.addWithInfo('With validation', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _index2.default,
      { validationState: 'success' },
      _react2.default.createElement(
        _formLabel2.default,
        null,
        'Nome:'
      ),
      _react2.default.createElement(_formControl2.default, { addonBefore: '@', placeholder: 'Form group with input', feedback: true })
    ),
    _react2.default.createElement(
      _index2.default,
      { validationState: 'warning' },
      _react2.default.createElement(
        _formLabel2.default,
        null,
        'Nome:'
      ),
      _react2.default.createElement(_formControl2.default, { addonBefore: '@', placeholder: 'Form group with input', feedback: true })
    ),
    _react2.default.createElement(
      _index2.default,
      { validationState: 'error' },
      _react2.default.createElement(
        _formLabel2.default,
        null,
        'Nome:'
      ),
      _react2.default.createElement(_formControl2.default, { addonBefore: '@', placeholder: 'Form group with input', feedback: true })
    )
  );
});