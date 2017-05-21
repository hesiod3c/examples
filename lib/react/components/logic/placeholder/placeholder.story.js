'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _storybookAddonKnobs = require('@kadira/storybook-addon-knobs');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _storybook.storiesOf)('Placeholder', module);

stories.addDecorator(_storybookAddonKnobs.withKnobs);

var options = {
  text: 'Text',
  media: 'Media',
  textRow: 'TextRow',
  rect: 'Rect',
  round: 'Round'
};

stories.addWithInfo('Normal', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _index2.default,
      {
        reducerName: 'xpto',
        ready: (0, _storybookAddonKnobs.boolean)('Ready', false),
        rows: (0, _storybookAddonKnobs.number)('Linhas', 5),
        type: (0, _storybookAddonKnobs.select)('Type', options, 'text'),
        firstLaunchOnly: (0, _storybookAddonKnobs.boolean)('first launch only', false),
        color: '#f0f0f0',
        style: { minWidth: 50, minHeight: 50 }
      },
      _react2.default.createElement(
        'div',
        null,
        'Esse \xE9 o conte\xFAdo'
      )
    )
  );
});