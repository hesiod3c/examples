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
    action.payload.reducerName = "";
    action.payload.list = [];
    action.payload.filteredList = [];
    action.payload.addItems = [];
    action.payload.removeItems = [];
  }

  var REDUCER_NAME = action.payload.reducerName ? action.payload.reducerName.toUpperCase() : '';
  var reducerName = action.payload.reducerName;

  switch (action.type) {
    case 'TRANSFER_GET_ITEMS_OF_' + REDUCER_NAME:
      action.payload.list = action.payload.list || [];
      action.payload.filteredList = action.payload.filteredList || [];
      action.payload.addItems = [];
      action.payload.removeItems = [];

      return state.set(reducerName, action.payload);
    case 'TRANSFER_SELECT_ITEM_OF_' + REDUCER_NAME:
      var select = {
        list: action.payload.list,
        filteredList: action.payload.filteredList,
        addItems: action.payload.addItems,
        removeItems: action.payload.removeItems
      };
      return state.set(reducerName, select);
    case 'TRANSFER_ADD_ITEMS_OF_' + REDUCER_NAME:
      var add = {
        list: action.payload.list,
        filteredList: action.payload.filteredList,
        addItems: [],
        removeItems: []
      };
      return state.set(reducerName, add);
    case 'TRANSFER_REMOVE_ITEMS_OF_' + REDUCER_NAME:
      var remove = {
        list: action.payload.list,
        filteredList: action.payload.filteredList,
        addItems: [],
        removeItems: []
      };
      return state.set(reducerName, remove);
    default:
      return state;
  }
};