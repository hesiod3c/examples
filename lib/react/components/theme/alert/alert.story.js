'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _storybookAddonActions = require('@kadira/storybook-addon-actions');

var _storybookAddonKnobs = require('@kadira/storybook-addon-knobs');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _storybook.storiesOf)('Alert', module);

stories.addDecorator(_storybookAddonKnobs.withKnobs);

var firstArgAction = (0, _storybookAddonActions.decorateAction)([function (args) {
  return args.slice(0, 1);
}]);

var options = {
  info: 'Info',
  warning: 'Warning',
  success: 'Success',
  danger: 'Danger'
};

stories.addWithInfo('Without dismiss', '\n  This is the basic usage.\n  ', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _index2.default,
      {
        type: (0, _storybookAddonKnobs.select)('Type', options, 'info'),
        showIcon: (0, _storybookAddonKnobs.boolean)('showIcon', false),
        dark: (0, _storybookAddonKnobs.boolean)('Dark color', false),
        headline: (0, _storybookAddonKnobs.text)('Headline', '')
      },
      _react2.default.createElement(
        'p',
        null,
        (0, _storybookAddonKnobs.text)('Text', 'Maecenas ipsum velit, consectetuer eu.')
      )
    )
  );
});

stories.addWithInfo('With dismiss', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _index2.default,
      {
        type: (0, _storybookAddonKnobs.select)('Type', options, 'info'),
        showIcon: (0, _storybookAddonKnobs.boolean)('showIcon', false),
        dark: (0, _storybookAddonKnobs.boolean)('Dark color', false),
        headline: (0, _storybookAddonKnobs.text)('Headline', ''),
        onDismiss: firstArgAction('removed')
      },
      _react2.default.createElement(
        'p',
        null,
        (0, _storybookAddonKnobs.text)('Text', 'Maecenas ipsum velit, consectetuer eu.')
      )
    )
  );
});