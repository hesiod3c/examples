'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactRedux = require('react-redux');

var _selectWithTagsComponent = require('./select-with-tags-component');

var _selectWithTagsComponent2 = _interopRequireDefault(_selectWithTagsComponent);

var _selectWithTagsActions = require('./select-with-tags-actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return state.toJS().reducers.selectWithTags;
};

var mergeProps = function mergeProps(stateProps, dispatchProps, ownProps) {
  var dispatch = dispatchProps.dispatch;
  var reducerName = ownProps.reducerName,
      onChange = ownProps.onChange;


  return _extends({}, ownProps, stateProps, {
    onGetItems: function onGetItems(items) {
      dispatch((0, _selectWithTagsActions.selectWithTagsGetItems)(reducerName, items));
    },
    onAddItem: function onAddItem(item) {
      var items = stateProps[reducerName].items;
      var count = 0;

      items.map(function (it) {
        if (it.value === item.value) {
          count++;
        }
      });

      if (count === 0) {
        items.push(item);

        dispatch((0, _selectWithTagsActions.selectWithTagsAddItem)(reducerName, items));
        if (onChange) {
          onChange(reducerName, items);
        }
      }
    },
    onRemoveItem: function onRemoveItem(item) {
      var itemsRemove = stateProps[reducerName].items;
      itemsRemove = itemsRemove.filter(function (it) {
        return it !== item;
      });

      dispatch((0, _selectWithTagsActions.selectWithTagsRemoveItem)(reducerName, itemsRemove));
      if (onChange) {
        onChange(reducerName, itemsRemove);
      }
    }
  });
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, null, mergeProps)(_selectWithTagsComponent2.default);