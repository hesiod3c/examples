'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _storybookAddonKnobs = require('@kadira/storybook-addon-knobs');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _storybook.storiesOf)('Image', module);

stories.addDecorator(_storybookAddonKnobs.withKnobs);

var pathImage = 'https://placeholdit.imgix.net/~text?txtsize=13&txt=image&w=100&h=100';

stories.addWithInfo('size', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_index2.default, { path: pathImage, size: 'small' }),
    _react2.default.createElement(_index2.default, { path: pathImage, size: 'medium' }),
    _react2.default.createElement(_index2.default, { path: pathImage, size: 'large' })
  );
});

stories.addWithInfo('style', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_index2.default, { size: 'small', rounded: true, path: pathImage }),
    _react2.default.createElement(_index2.default, { size: 'small', circle: true, path: pathImage }),
    _react2.default.createElement(_index2.default, { size: 'small', thumbnail: true, path: pathImage }),
    _react2.default.createElement(_index2.default, { size: 'medium', rounded: true, path: pathImage }),
    _react2.default.createElement(_index2.default, { size: 'medium', circle: true, path: pathImage }),
    _react2.default.createElement(_index2.default, { size: 'medium', thumbnail: true, path: pathImage }),
    _react2.default.createElement(_index2.default, { size: 'large', rounded: true, path: pathImage }),
    _react2.default.createElement(_index2.default, { size: 'large', circle: true, path: pathImage }),
    _react2.default.createElement(_index2.default, { size: 'large', thumbnail: true, path: pathImage })
  );
});

stories.addWithInfo('align', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_index2.default, { size: 'small', rounded: true, path: pathImage }),
    _react2.default.createElement(_index2.default, { size: 'medium', rounded: true, path: pathImage }),
    _react2.default.createElement(_index2.default, { size: 'large', rounded: true, path: pathImage }),
    _react2.default.createElement(_index2.default, { size: 'small', circle: true, align: 'center', path: pathImage }),
    _react2.default.createElement(_index2.default, { size: 'medium', circle: true, align: 'center', path: pathImage }),
    _react2.default.createElement(_index2.default, { size: 'large', circle: true, align: 'center', path: pathImage }),
    _react2.default.createElement(_index2.default, { size: 'small', thumbnail: true, align: 'right', path: pathImage }),
    _react2.default.createElement(_index2.default, { size: 'medium', thumbnail: true, align: 'right', path: pathImage }),
    _react2.default.createElement(_index2.default, { size: 'large', thumbnail: true, align: 'right', path: pathImage })
  );
});