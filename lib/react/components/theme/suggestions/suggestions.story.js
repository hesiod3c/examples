'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _storybookAddonKnobs = require('@kadira/storybook-addon-knobs');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _storybook.storiesOf)('Suggestions', module);

stories.addDecorator(_storybookAddonKnobs.withKnobs);

var suggestions = [{ id: 1, name: "test_1" }, { id: 2, name: "example_2" }, { id: 3, name: "example_3" }, { id: 4, name: "test_4" }, { id: 5, name: "example_5" }, { id: 6, name: "example_6" }, { id: 7, name: "teste_7" }, { id: 8, name: "example_8" }, { id: 9, name: "example_9" }, { id: 10, name: "example_10" }];

stories.addWithInfo('Normal', function () {
  return _react2.default.createElement(_index2.default, {
    listboxId: 'reactTags-listbox',
    expandable: true,
    suggestions: suggestions,
    query: (0, _storybookAddonKnobs.text)('Query', 'example'),
    addTag: (0, _storybook.action)('add'),
    maxSuggestionsLength: 6 });
});