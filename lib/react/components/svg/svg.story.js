'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _storybookAddonKnobs = require('@kadira/storybook-addon-knobs');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _storybook.storiesOf)('Svg', module);

stories.addDecorator(_storybookAddonKnobs.withKnobs);

stories.addWithInfo('Normal', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_index2.default, { src: 'logo/acom' }),
    _react2.default.createElement(_index2.default, { src: 'logo/suba' }),
    _react2.default.createElement(_index2.default, { src: 'logo/shop' }),
    _react2.default.createElement(_index2.default, { src: 'logo/soub' }),
    _react2.default.createElement(_index2.default, { src: 'logo/campaign-light' }),
    _react2.default.createElement(_index2.default, { src: 'logo/spacey' }),
    _react2.default.createElement(_index2.default, { src: 'illustration/rocket-background' }),
    _react2.default.createElement(_index2.default, { src: 'illustration/rocket-progress-bar' })
  );
});