'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = require('immutable');

var initialState = (0, _immutable.Map)({
  notifiers: []
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case 'NOTIFIER_SHOW':
      var newNotifier = {
        name: action.payload.name,
        id: '' + new Date().getTime(),
        type: action.payload.type,
        headline: action.payload.headline,
        message: action.payload.message
      };

      return state.set('notifiers', state.get('notifiers').concat(newNotifier));

    case 'NOTIFIER_HIDE':
      var notifiers = state.get('notifiers').filter(function (item) {
        return item.id !== action.payload.id;
      });
      return state.set('notifiers', notifiers);
    default:
      return state;
  }
};