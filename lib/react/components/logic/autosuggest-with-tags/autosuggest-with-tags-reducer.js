'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = require('immutable');

var initialState = (0, _immutable.Map)({});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];


  if (typeof action.payload === 'undefined') {
    action.payload = {};
    action.payload.reducerName = '';
    action.payload.items = [];
    action.payload.item = '';
  }

  var REDUCER_NAME = action.payload.reducerName ? action.payload.reducerName.toUpperCase() : '';
  var reducerName = action.payload.reducerName;

  switch (action.type) {
    case 'AUTOSUGGEST_WITH_TAGS_GET_ITEMS_OF_' + REDUCER_NAME:
      var initial = {};
      initial[reducerName] = { items: action.payload.items || [], item: '' };
      return state.merge(state, initial);

    case 'AUTOSUGGEST_WITH_TAGS_GET_FIELD_OF_' + REDUCER_NAME:
      var get = {};
      get[reducerName] = {
        items: state.toJS()[reducerName].items,
        item: action.payload.value
      };
      return state.merge(state, get);

    case 'AUTOSUGGEST_WITH_TAGS_ADD_ITEM_OF_' + REDUCER_NAME:
      var add = {};
      add[reducerName] = {
        items: action.payload.items,
        item: ''
      };
      return state.merge(state, add);

    case 'AUTOSUGGEST_WITH_TAGS_REMOVE_ITEM_OF_' + REDUCER_NAME:
      var remove = {};
      remove[reducerName] = {
        items: action.payload.items,
        item: state.toJS()[reducerName].item
      };
      return state.merge(state, remove);

    default:
      return state;
  }
};