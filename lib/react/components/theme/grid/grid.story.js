'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _storybookAddonKnobs = require('@kadira/storybook-addon-knobs');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _gridRow = require('../grid-row');

var _gridRow2 = _interopRequireDefault(_gridRow);

var _gridCol = require('../grid-col');

var _gridCol2 = _interopRequireDefault(_gridCol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _storybook.storiesOf)('Grid', module);

stories.addDecorator(_storybookAddonKnobs.withKnobs);

var style = {
  'backgroundColor': '#ccc',
  'border': '1px solid #999',
  'height': '40px'
};

stories.addWithInfo('Normal', function () {
  return _react2.default.createElement(
    _index2.default,
    null,
    _react2.default.createElement(
      _gridRow2.default,
      { start: 'xs' },
      _react2.default.createElement(
        _gridCol2.default,
        { xs: 1, style: style },
        'Grid 1'
      ),
      _react2.default.createElement(
        _gridCol2.default,
        { xs: 1, style: style },
        'Grid 1'
      ),
      _react2.default.createElement(
        _gridCol2.default,
        { xs: 1, style: style },
        'Grid 1'
      ),
      _react2.default.createElement(
        _gridCol2.default,
        { xs: 1, style: style },
        'Grid 1'
      ),
      _react2.default.createElement(
        _gridCol2.default,
        { xs: 1, style: style },
        'Grid 1'
      ),
      _react2.default.createElement(
        _gridCol2.default,
        { xs: 1, style: style },
        'Grid 1'
      ),
      _react2.default.createElement(
        _gridCol2.default,
        { xs: 1, style: style },
        'Grid 1'
      ),
      _react2.default.createElement(
        _gridCol2.default,
        { xs: 1, style: style },
        'Grid 1'
      ),
      _react2.default.createElement(
        _gridCol2.default,
        { xs: 1, style: style },
        'Grid 1'
      ),
      _react2.default.createElement(
        _gridCol2.default,
        { xs: 1, style: style },
        'Grid 1'
      ),
      _react2.default.createElement(
        _gridCol2.default,
        { xs: 1, style: style },
        'Grid 1'
      ),
      _react2.default.createElement(
        _gridCol2.default,
        { xs: 1, style: style },
        'Grid 1'
      )
    ),
    _react2.default.createElement(
      _gridRow2.default,
      { start: 'xs' },
      _react2.default.createElement(
        _gridCol2.default,
        { xs: 2, style: style },
        'Grid 2'
      ),
      _react2.default.createElement(
        _gridCol2.default,
        { xs: 2, style: style },
        'Grid 2'
      ),
      _react2.default.createElement(
        _gridCol2.default,
        { xs: 2, style: style },
        'Grid 2'
      ),
      _react2.default.createElement(
        _gridCol2.default,
        { xs: 2, style: style },
        'Grid 2'
      ),
      _react2.default.createElement(
        _gridCol2.default,
        { xs: 2, style: style },
        'Grid 2'
      ),
      _react2.default.createElement(
        _gridCol2.default,
        { xs: 2, style: style },
        'Grid 2'
      )
    ),
    _react2.default.createElement(
      _gridRow2.default,
      { start: 'xs' },
      _react2.default.createElement(
        _gridCol2.default,
        { xs: 3, style: style },
        'Grid 3'
      ),
      _react2.default.createElement(
        _gridCol2.default,
        { xs: 3, style: style },
        'Grid 3'
      ),
      _react2.default.createElement(
        _gridCol2.default,
        { xs: 3, style: style },
        'Grid 3'
      ),
      _react2.default.createElement(
        _gridCol2.default,
        { xs: 3, style: style },
        'Grid 3'
      )
    ),
    _react2.default.createElement(
      _gridRow2.default,
      { start: 'xs' },
      _react2.default.createElement(
        _gridCol2.default,
        { xs: 4, style: style },
        'Grid 4'
      ),
      _react2.default.createElement(
        _gridCol2.default,
        { xs: 4, style: style },
        'Grid 4'
      ),
      _react2.default.createElement(
        _gridCol2.default,
        { xs: 4, style: style },
        'Grid 4'
      )
    ),
    _react2.default.createElement(
      _gridRow2.default,
      { start: 'xs' },
      _react2.default.createElement(
        _gridCol2.default,
        { xs: 6, style: style },
        'Grid 6'
      ),
      _react2.default.createElement(
        _gridCol2.default,
        { xs: 6, style: style },
        'Grid 6'
      )
    ),
    _react2.default.createElement(
      _gridRow2.default,
      { start: 'xs' },
      _react2.default.createElement(
        _gridCol2.default,
        { xs: 12, style: style },
        'Grid 12'
      )
    )
  );
});