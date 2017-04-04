'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _storybookAddonKnobs = require('@kadira/storybook-addon-knobs');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _storybook.storiesOf)('Modal', module);

stories.addDecorator(_storybookAddonKnobs.withKnobs);

var body = function body() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'strong',
      null,
      'ALIBABA'
    ),
    _react2.default.createElement(
      'em',
      null,
      'NADA'
    ),
    _react2.default.createElement(
      'span',
      null,
      '\xC9'
    )
  );
};

var button = function button() {
  return _react2.default.createElement(
    _button2.default,
    { style: 'primary' },
    'Ok'
  );
};

var modal = {
  id: '' + new Date().getTime(),
  header: 'Termos de Segmenta\xE7\xE3o',
  body: body(),
  footer: true,
  actionButton: button()
};

stories.addWithInfo('scaleUp', function () {
  return _react2.default.createElement(_index2.default, { data: modal, effect: 'scaleUp', onDismiss: (0, _storybook.action)('removed') });
});

stories.addWithInfo('slideFromRight', function () {
  return _react2.default.createElement(_index2.default, { data: modal, effect: 'slideFromRight', onDismiss: (0, _storybook.action)('removed') });
});

stories.addWithInfo('slideFromBottom', function () {
  return _react2.default.createElement(_index2.default, { data: modal, effect: 'slideFromBottom', onDismiss: (0, _storybook.action)('removed') });
});

stories.addWithInfo('newspaper', function () {
  return _react2.default.createElement(_index2.default, { data: modal, effect: 'newspaper', onDismiss: (0, _storybook.action)('removed') });
});

stories.addWithInfo('fall', function () {
  return _react2.default.createElement(_index2.default, { data: modal, effect: 'fall', onDismiss: (0, _storybook.action)('removed') });
});

stories.addWithInfo('sideFall', function () {
  return _react2.default.createElement(_index2.default, { data: modal, effect: 'sideFall', onDismiss: (0, _storybook.action)('removed') });
});

stories.addWithInfo('flipHorizontalThreeD', function () {
  return _react2.default.createElement(_index2.default, { data: modal, effect: 'flipHorizontalThreeD', onDismiss: (0, _storybook.action)('removed') });
});

stories.addWithInfo('flipVerticalThreeD', function () {
  return _react2.default.createElement(_index2.default, { data: modal, effect: 'flipVerticalThreeD', onDismiss: (0, _storybook.action)('removed') });
});

stories.addWithInfo('signThreeD', function () {
  return _react2.default.createElement(_index2.default, { data: modal, effect: 'signThreeD', onDismiss: (0, _storybook.action)('removed') });
});

stories.addWithInfo('superScaled', function () {
  return _react2.default.createElement(_index2.default, { data: modal, effect: 'superScaled', onDismiss: (0, _storybook.action)('removed') });
});

stories.addWithInfo('rotateFromBottomThreeD', function () {
  return _react2.default.createElement(_index2.default, { data: modal, effect: 'rotateFromBottomThreeD', onDismiss: (0, _storybook.action)('removed') });
});

stories.addWithInfo('rotateFromLeftThreeD', function () {
  return _react2.default.createElement(_index2.default, { data: modal, effect: 'rotateFromLeftThreeD', onDismiss: (0, _storybook.action)('removed') });
});