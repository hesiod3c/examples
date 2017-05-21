'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _storybookAddonKnobs = require('@kadira/storybook-addon-knobs');

var _formGroup = require('../form-group');

var _formGroup2 = _interopRequireDefault(_formGroup);

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _storybook.storiesOf)('FormControl', module);

stories.addDecorator(_storybookAddonKnobs.withKnobs);

stories.addWithInfo('Knobs', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_index2.default, {
      type: (0, _storybookAddonKnobs.text)('Type', 'text'),
      addonBefore: (0, _storybookAddonKnobs.text)('Addon Before', '@'),
      addonAfter: (0, _storybookAddonKnobs.text)('Addon After', '.00'),
      placeholder: (0, _storybookAddonKnobs.text)('Placeholder', 'Digite algo'),
      disabled: (0, _storybookAddonKnobs.boolean)('Disabled', false),
      onFocus: (0, _storybook.action)('focus'),
      onChange: (0, _storybook.action)('change'),
      onBlur: (0, _storybook.action)('blur')
    }),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _index2.default,
      {
        type: 'select',
        onFocus: (0, _storybook.action)('focus'),
        onChange: (0, _storybook.action)('change'),
        onBlur: (0, _storybook.action)('blur')
      },
      _react2.default.createElement(
        'option',
        { value: '' },
        'Selecione'
      ),
      _react2.default.createElement(
        'option',
        { value: 'a' },
        'a'
      ),
      _react2.default.createElement(
        'option',
        { value: 'b' },
        'b'
      )
    )
  );
});

stories.addWithInfo('Disabled', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_index2.default, { placeholder: 'Digite um nome', disabled: true }),
    _react2.default.createElement(_index2.default, { type: 'email', placeholder: 'Digire o seu e-mail', disabled: true }),
    _react2.default.createElement(_index2.default, { type: 'radio', disabled: true }),
    _react2.default.createElement(_index2.default, { type: 'checkbox', disabled: true }),
    _react2.default.createElement(
      _index2.default,
      { type: 'select', disabled: true },
      _react2.default.createElement(
        'option',
        { value: '' },
        'Selecione'
      ),
      _react2.default.createElement(
        'option',
        { value: 'a' },
        'a'
      ),
      _react2.default.createElement(
        'option',
        { value: 'b' },
        'b'
      )
    ),
    _react2.default.createElement(_index2.default, { type: 'textarea', disabled: true })
  );
});

stories.addWithInfo('Addon before', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_index2.default, { type: 'password', placeholder: 'Digite um nome', addonBefore: _react2.default.createElement(_index2.default, { type: 'radio' }) })
  );
});

stories.addWithInfo('Addon after', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_index2.default, { type: 'password', placeholder: 'Digite um valor', addonAfter: '.00' })
  );
});

stories.addWithInfo('Feedback', function () {
  return _react2.default.createElement(
    _formGroup2.default,
    { validationState: 'success' },
    _react2.default.createElement(_index2.default, { type: 'password', placeholder: 'Digite um valor', feedback: true })
  );
});

stories.addWithInfo('On focus', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_index2.default, { placeholder: 'Digite um nome', onFocus: (0, _storybook.action)('focus') }),
    _react2.default.createElement(_index2.default, { type: 'radio', onFocus: (0, _storybook.action)('focus') }),
    _react2.default.createElement(_index2.default, { type: 'checkbox', onFocus: (0, _storybook.action)('focus') }),
    _react2.default.createElement(
      _index2.default,
      { type: 'select', onFocus: (0, _storybook.action)('focus') },
      _react2.default.createElement(
        'option',
        { value: '' },
        'Selecione'
      ),
      _react2.default.createElement(
        'option',
        { value: 'a' },
        'a'
      ),
      _react2.default.createElement(
        'option',
        { value: 'b' },
        'b'
      )
    ),
    _react2.default.createElement(_index2.default, { type: 'textarea', onFocus: (0, _storybook.action)('focus') })
  );
});

stories.addWithInfo('On change', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_index2.default, { placeholder: 'Digite um nome', onChange: (0, _storybook.action)('change') }),
    _react2.default.createElement(_index2.default, { type: 'radio', onChange: (0, _storybook.action)('change') }),
    _react2.default.createElement(_index2.default, { type: 'checkbox', onChange: (0, _storybook.action)('change') }),
    _react2.default.createElement(
      _index2.default,
      { type: 'select', onChange: (0, _storybook.action)('change') },
      _react2.default.createElement(
        'option',
        { value: '' },
        'Selecione'
      ),
      _react2.default.createElement(
        'option',
        { value: 'a' },
        'a'
      ),
      _react2.default.createElement(
        'option',
        { value: 'b' },
        'b'
      )
    ),
    _react2.default.createElement(_index2.default, { type: 'textarea', onChange: (0, _storybook.action)('change') })
  );
});

stories.addWithInfo('On blur', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_index2.default, { placeholder: 'Digite um nome', onBlur: (0, _storybook.action)('blur') }),
    _react2.default.createElement(_index2.default, { type: 'radio', onBlur: (0, _storybook.action)('blur') }),
    _react2.default.createElement(_index2.default, { type: 'checkbox', onBlur: (0, _storybook.action)('blur') }),
    _react2.default.createElement(
      _index2.default,
      { type: 'select', onBlur: (0, _storybook.action)('blur') },
      _react2.default.createElement(
        'option',
        { value: '' },
        'Selecione'
      ),
      _react2.default.createElement(
        'option',
        { value: 'a' },
        'a'
      ),
      _react2.default.createElement(
        'option',
        { value: 'b' },
        'b'
      )
    ),
    _react2.default.createElement(_index2.default, { type: 'textarea', onBlur: (0, _storybook.action)('blur') })
  );
});