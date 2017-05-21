'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _storybookAddonKnobs = require('@kadira/storybook-addon-knobs');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _gridCol = require('../grid-col');

var _gridCol2 = _interopRequireDefault(_gridCol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _storybook.storiesOf)('GridRow', module);

stories.addDecorator(_storybookAddonKnobs.withKnobs);

var style = {
  'backgroundColor': '#ccc',
  'height': '100px'
};

stories.addWithInfo('Normal', function () {
  return _react2.default.createElement(
    _index2.default,
    { start: 'xs' },
    _react2.default.createElement(
      _gridCol2.default,
      { xs: 6, sm: 6, md: 6, style: style },
      'Grid 6'
    )
  );
});