'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactRedux = require('react-redux');

var _autosuggestWithTagsComponent = require('./autosuggest-with-tags-component');

var _autosuggestWithTagsComponent2 = _interopRequireDefault(_autosuggestWithTagsComponent);

var _autosuggestWithTagsActions = require('./autosuggest-with-tags-actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return state.toJS().reducers.autosuggestWithTags;
};

var mergeProps = function mergeProps(stateProps, dispatchProps, ownProps) {
  var dispatch = dispatchProps.dispatch;
  var reducerName = ownProps.reducerName,
      onChange = ownProps.onChange;


  return _extends({}, ownProps, stateProps, {
    onGetItems: function onGetItems(items) {
      dispatch((0, _autosuggestWithTagsActions.autosuggestWithTagsGetItems)(reducerName, items));
    },
    onAddItem: function onAddItem(item) {
      var items = stateProps[reducerName].items;
      items.push(item);

      dispatch((0, _autosuggestWithTagsActions.autosuggestWithTagsAddItem)(reducerName, items));
      if (onChange) {
        onChange(reducerName, items);
      }
    },
    onGetField: function onGetField(value) {
      dispatch((0, _autosuggestWithTagsActions.autosuggestWithTagsGetField)(reducerName, value));
    },
    onRemoveItem: function onRemoveItem(item) {
      var itemsRemove = stateProps[reducerName].items;
      itemsRemove = itemsRemove.filter(function (it) {
        return it !== item;
      });

      dispatch((0, _autosuggestWithTagsActions.autosuggestWithTagsRemoveItem)(reducerName, itemsRemove));
      if (onChange) {
        onChange(reducerName, itemsRemove);
      }
    }
  });
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, null, mergeProps)(_autosuggestWithTagsComponent2.default);