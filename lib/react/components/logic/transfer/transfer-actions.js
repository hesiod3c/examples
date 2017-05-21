"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transferGetItems = transferGetItems;
exports.transferSelectItem = transferSelectItem;
exports.transferAddItems = transferAddItems;
exports.transferRemoveItems = transferRemoveItems;
var toUpper = function toUpper(name) {
  return name.toUpperCase();
};

function transferGetItems(reducerName, list, filteredList) {
  return {
    type: "TRANSFER_GET_ITEMS_OF_" + toUpper(reducerName),
    payload: {
      reducerName: reducerName,
      list: list,
      filteredList: filteredList
    }
  };
}

function transferSelectItem(reducerName, addItems, removeItems, list, filteredList) {
  return {
    type: "TRANSFER_SELECT_ITEM_OF_" + toUpper(reducerName),
    payload: {
      reducerName: reducerName,
      addItems: addItems,
      removeItems: removeItems,
      list: list,
      filteredList: filteredList
    }
  };
}

function transferAddItems(reducerName, list, filteredList) {
  return {
    type: "TRANSFER_ADD_ITEMS_OF_" + toUpper(reducerName),
    payload: {
      reducerName: reducerName,
      list: list,
      filteredList: filteredList
    }
  };
}

function transferRemoveItems(reducerName, list, filteredList) {
  return {
    type: "TRANSFER_REMOVE_ITEMS_OF_" + toUpper(reducerName),
    payload: {
      reducerName: reducerName,
      list: list,
      filteredList: filteredList
    }
  };
}