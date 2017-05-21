"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectWithTagsGetItems = selectWithTagsGetItems;
exports.selectWithTagsAddItem = selectWithTagsAddItem;
exports.selectWithTagsRemoveItem = selectWithTagsRemoveItem;
var toUpper = function toUpper(name) {
  return name.toUpperCase();
};

function selectWithTagsGetItems(reducerName, items) {
  return {
    type: "SELECT_WITH_TAGS_GET_ITEMS_OF_" + toUpper(reducerName),
    payload: {
      reducerName: reducerName,
      items: items
    }
  };
}

function selectWithTagsAddItem(reducerName, items) {
  return {
    type: "SELECT_WITH_TAGS_ADD_ITEM_OF_" + toUpper(reducerName),
    payload: {
      reducerName: reducerName,
      items: items
    }
  };
}

function selectWithTagsRemoveItem(reducerName, items) {
  return {
    type: "SELECT_WITH_TAGS_REMOVE_ITEM_OF_" + toUpper(reducerName),
    payload: {
      reducerName: reducerName,
      items: items
    }
  };
}