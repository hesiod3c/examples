'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactRedux = require('react-redux');

var _transferComponent = require('./transfer-component');

var _transferComponent2 = _interopRequireDefault(_transferComponent);

var _transferActions = require('./transfer-actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state, ownProps) {
  var reducer = {};
  reducer[ownProps.reducerName] = state.toJS().reducers.transfer[ownProps.reducerName];
  return reducer;
};

var mergeProps = function mergeProps(stateProps, dispatchProps, ownProps) {
  var dispatch = dispatchProps.dispatch;


  return _extends({}, ownProps, stateProps, {
    onGetItems: function onGetItems(items, filtered) {
      dispatch((0, _transferActions.transferGetItems)(ownProps.reducerName, items, filtered));
    },
    onSelectItem: function onSelectItem(item, type) {
      var items = type === 'add' ? stateProps[ownProps.reducerName].addItems : stateProps[ownProps.reducerName].removeItems;
      var isExists = false;
      var list = stateProps[ownProps.reducerName].list;
      var filteredList = stateProps[ownProps.reducerName].filteredList;

      items = items.map(function (it) {
        if (it.value === item.value) {
          isExists = true;
          it.selected = false;
          if (type === 'add') {
            list = list.map(function (listItem) {
              if (listItem.value === item.value) {
                listItem.selected = false;
              }

              return listItem;
            });
          } else {
            filteredList = filteredList.map(function (listItem) {
              if (listItem.value === item.value) {
                listItem.selected = false;
              }

              return listItem;
            });
          }
        }
        return it;
      });

      if (isExists) {
        items = items.filter(function (filtered) {
          return filtered.value !== item.value;
        });
      } else {
        item.selected = true;
        items.push(item);
      }

      var addItems = type === 'add' ? items : [];
      var removeItems = type === 'remove' ? items : [];

      dispatch((0, _transferActions.transferSelectItem)(ownProps.reducerName, addItems, removeItems, list, filteredList));
    },
    onAddItems: function onAddItems() {
      var items = stateProps[ownProps.reducerName].addItems.map(function (item) {
        return item.value;
      });
      var list = stateProps[ownProps.reducerName].list.filter(function (item) {
        return items.indexOf(item.value) === -1;
      });

      var addItems = stateProps[ownProps.reducerName].addItems.map(function (item) {
        item.selected = false;
        return item;
      });

      var filteredList = stateProps[ownProps.reducerName].filteredList;
      filteredList = filteredList.concat(addItems).map(function (it) {
        it.selected = false;
        return it;
      });

      dispatch((0, _transferActions.transferAddItems)(ownProps.reducerName, list, filteredList));
      if (ownProps.onChange) {
        ownProps.onChange(ownProps.reducerName, filteredList);
      }
    },
    onRemoveItems: function onRemoveItems() {
      var items = stateProps[ownProps.reducerName].removeItems.map(function (item) {
        return item.value;
      });
      var filteredList = stateProps[ownProps.reducerName].filteredList.filter(function (item) {
        return items.indexOf(item.value) === -1;
      });
      var removeItems = stateProps[ownProps.reducerName].removeItems.map(function (item) {
        item.selected = false;
        return item;
      });

      var list = stateProps[ownProps.reducerName].list;
      list = list.concat(removeItems).map(function (it) {
        it.selected = false;
        return it;
      });

      dispatch((0, _transferActions.transferRemoveItems)(ownProps.reducerName, list, filteredList));
      if (ownProps.onChange) {
        ownProps.onChange(ownProps.reducerName, filteredList);
      }
    }
  });
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, null, mergeProps)(_transferComponent2.default);