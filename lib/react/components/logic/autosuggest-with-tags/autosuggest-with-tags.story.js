'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _reduxImmutable = require('redux-immutable');

var _reduxLogger = require('redux-logger');

var _storybook = require('@kadira/storybook');

var _storybookAddonKnobs = require('@kadira/storybook-addon-knobs');

var _reducers = require('../../../reducers');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _storybook.storiesOf)('Auto Suggest With Tags', module);

stories.addDecorator(_storybookAddonKnobs.withKnobs);

var initialState = _immutable2.default.Map(window.__INITIAL_STATE__);

var reducers = (0, _reduxImmutable.combineReducers)({
  autosuggestWithTags: _reducers.autosuggestWithTags
});

var rootReducer = (0, _reduxImmutable.combineReducers)({
  reducers: reducers
});

var store = (0, _redux.createStore)(rootReducer, initialState, (0, _redux.applyMiddleware)(_reduxThunk2.default, (0, _reduxLogger.createLogger)({ collapsed: true, stateTransformer: function stateTransformer(state) {
    return state.toJS();
  } })));

stories.addDecorator(function (getStory) {
  return _react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    getStory()
  );
});

var tags = [{
  id: "1022",
  name: "Notebook",
  parent: {
    id: "10",
    name: "Informática"
  }
}, {
  id: "10",
  name: "Informática"
}];

var options = [{
  id: "30",
  name: "Moda"
}, {
  id: "40",
  name: "batom",
  parent: {
    id: "50",
    name: "Moda"
  }
}];

var onChange = function onChange(name, items) {
  console.log(name, items, 'items');
};

stories.addWithInfo('Normal', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_index2.default, {
      options: options,
      tags: tags,
      reducerName: 'xpto',
      placeholder: 'Busque o departamento',
      onChange: onChange
    })
  );
});

stories.addWithInfo('With two components', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_index2.default, {
      options: options,
      reducerName: 'categories',
      placeholder: 'Busque o departamento 1'
    }),
    _react2.default.createElement(_index2.default, {
      options: options,
      reducerName: 'users',
      placeholder: 'Busque o departamento 2'
    })
  );
});

stories.addWithInfo('Without suggestions', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_index2.default, {
      tags: tags,
      reducerName: 'xpto2',
      placeholder: 'Adicione um departamento',
      onChange: onChange
    })
  );
});