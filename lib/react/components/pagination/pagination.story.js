'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _storybookAddonKnobs = require('@kadira/storybook-addon-knobs');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _storybook.storiesOf)('Pagination', module);

stories.addDecorator(_storybookAddonKnobs.withKnobs);

stories.addWithInfo('without props', function () {
  return _react2.default.createElement(_index2.default, null);
});

stories.addWithInfo('with props', function () {
  return _react2.default.createElement(_index2.default, {
    activePage: (0, _storybookAddonKnobs.number)('activePage', 1),
    itemsCountPerPage: (0, _storybookAddonKnobs.number)('itemsCountPerPage', 10),
    totalItemsCount: (0, _storybookAddonKnobs.number)('totalItemsCount', 200),
    onChange: (0, _storybook.action)('changed')
  });
});

stories.addWithInfo('with hide disabled', function () {
  return _react2.default.createElement(_index2.default, {
    hideDisabled: true,
    activePage: (0, _storybookAddonKnobs.number)('activePage', 1),
    itemsCountPerPage: (0, _storybookAddonKnobs.number)('itemsCountPerPage', 10),
    totalItemsCount: (0, _storybookAddonKnobs.number)('totalItemsCount', 200),
    onChange: (0, _storybook.action)('changed')
  });
});

stories.addWithInfo('custom pages range', function () {
  return _react2.default.createElement(_index2.default, {
    hideDisabled: true,
    activePage: (0, _storybookAddonKnobs.number)('activePage', 1),
    itemsCountPerPage: (0, _storybookAddonKnobs.number)('itemsCountPerPage', 10),
    totalItemsCount: (0, _storybookAddonKnobs.number)('totalItemsCount', 200),
    pageRangeDisplayed: (0, _storybookAddonKnobs.number)('pageRangeDisplayed', 10),
    onChange: (0, _storybook.action)('changed')
  });
});