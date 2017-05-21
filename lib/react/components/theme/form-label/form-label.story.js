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

var stories = (0, _storybook.storiesOf)('FormLabel', module);

stories.addDecorator(_storybookAddonKnobs.withKnobs);

stories.addWithInfo('Normal', function () {
  return _react2.default.createElement(
    _formGroup2.default,
    null,
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _index2.default,
      null,
      'Nome:'
    )
  );
});

stories.addWithInfo('Addon text', function () {
  return _react2.default.createElement(
    _formGroup2.default,
    null,
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _index2.default,
      { addon: 'text' },
      'Nome:'
    )
  );
});

stories.addWithInfo('Addon link', function () {
  return _react2.default.createElement(
    _formGroup2.default,
    null,
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement('br', null),
    _react2.default.createElement(
      _index2.default,
      { addon: _react2.default.createElement(
          'a',
          { href: '/home' },
          'Esqueci a minha senha'
        ) },
      'Nome:'
    )
  );
});