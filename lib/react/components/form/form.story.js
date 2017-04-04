'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _storybookAddonKnobs = require('@kadira/storybook-addon-knobs');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _formGroup = require('../form-group');

var _formGroup2 = _interopRequireDefault(_formGroup);

var _formLabel = require('../form-label');

var _formLabel2 = _interopRequireDefault(_formLabel);

var _formControl = require('../form-control');

var _formControl2 = _interopRequireDefault(_formControl);

var _formActions = require('../form-actions');

var _formActions2 = _interopRequireDefault(_formActions);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _storybook.storiesOf)('Form', module);

stories.addDecorator(_storybookAddonKnobs.withKnobs);

stories.addWithInfo('Normal', function () {
  return _react2.default.createElement(
    _index2.default,
    { onSubmit: function onSubmit() {} },
    _react2.default.createElement(
      _formGroup2.default,
      null,
      _react2.default.createElement(
        _formLabel2.default,
        null,
        'Example of label'
      ),
      _react2.default.createElement(_formControl2.default, { placeholder: 'Form, FormGroup and input' })
    ),
    _react2.default.createElement(
      _formActions2.default,
      null,
      _react2.default.createElement(
        _button2.default,
        null,
        'Cancelar'
      ),
      _react2.default.createElement(
        _button2.default,
        { style: 'primary' },
        'Enviar'
      )
    )
  );
});

stories.addWithInfo('Inline', function () {
  return _react2.default.createElement(
    _index2.default,
    { onSubmit: function onSubmit() {}, style: 'inline' },
    _react2.default.createElement(
      _formGroup2.default,
      null,
      _react2.default.createElement(_formControl2.default, { placeholder: 'Form, FormGroup and input' })
    ),
    _react2.default.createElement(
      _formGroup2.default,
      null,
      _react2.default.createElement(_formControl2.default, { placeholder: 'Form, FormGroup and input' })
    ),
    _react2.default.createElement(
      _formActions2.default,
      null,
      _react2.default.createElement(
        _button2.default,
        null,
        'Cancelar'
      ),
      _react2.default.createElement(
        _button2.default,
        { style: 'primary' },
        'Enviar'
      )
    )
  );
});

stories.addWithInfo('Horizontal', function () {
  return _react2.default.createElement(
    _index2.default,
    { onSubmit: function onSubmit() {}, style: 'horizontal' },
    _react2.default.createElement(
      _formGroup2.default,
      null,
      _react2.default.createElement(
        _formLabel2.default,
        null,
        'Example of label'
      ),
      _react2.default.createElement(_formControl2.default, { placeholder: 'Form, FormGroup and input' })
    ),
    _react2.default.createElement(
      _formGroup2.default,
      null,
      _react2.default.createElement(
        _formLabel2.default,
        null,
        'Example of label'
      ),
      _react2.default.createElement(_formControl2.default, { placeholder: 'Form, FormGroup and input' })
    ),
    _react2.default.createElement(
      _formActions2.default,
      null,
      _react2.default.createElement(
        _button2.default,
        null,
        'Cancelar'
      ),
      _react2.default.createElement(
        _button2.default,
        { style: 'primary' },
        'Enviar'
      )
    )
  );
});