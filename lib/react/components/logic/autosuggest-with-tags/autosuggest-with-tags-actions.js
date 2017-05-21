"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.autosuggestWithTagsGetItems = autosuggestWithTagsGetItems;
exports.autosuggestWithTagsAddItem = autosuggestWithTagsAddItem;
exports.autosuggestWithTagsGetField = autosuggestWithTagsGetField;
exports.autosuggestWithTagsRemoveItem = autosuggestWithTagsRemoveItem;
var toUpper = function toUpper(name) {
  return name.toUpperCase();
};

function autosuggestWithTagsGetItems(reducerName, items) {
  return {
    type: "AUTOSUGGEST_WITH_TAGS_GET_ITEMS_OF_" + toUpper(reducerName),
    payload: {
      reducerName: reducerName,
      items: items
    }
  };
}

function autosuggestWithTagsAddItem(reducerName, items) {
  return {
    type: "AUTOSUGGEST_WITH_TAGS_ADD_ITEM_OF_" + toUpper(reducerName),
    payload: {
      reducerName: reducerName,
      items: items
    }
  };
}

function autosuggestWithTagsGetField(reducerName, value) {
  return {
    type: "AUTOSUGGEST_WITH_TAGS_GET_FIELD_OF_" + toUpper(reducerName),
    payload: {
      reducerName: reducerName,
      value: value
    }
  };
}

function autosuggestWithTagsRemoveItem(reducerName, items) {
  return {
    type: "AUTOSUGGEST_WITH_TAGS_REMOVE_ITEM_OF_" + toUpper(reducerName),
    payload: {
      reducerName: reducerName,
      items: items
    }
  };
}