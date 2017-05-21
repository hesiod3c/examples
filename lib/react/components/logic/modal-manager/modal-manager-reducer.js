'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = require('immutable');

var initialState = (0, _immutable.Map)({
  modals: []
});

exports.default = function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case 'MODAL_SHOW':
      var newModal = {
        name: action.payload.name,
        id: action.payload.id,
        header: action.payload.header,
        body: action.payload.body,
        footer: action.payload.footer,
        actionButton: action.payload.actionButton,
        maxWidth: 600
      };

      return state.set('modals', state.get('modals').concat(newModal));

    case 'MODAL_HIDE':
      var modals = state.get('modals').filter(function (item) {
        return item.id !== action.payload.id;
      });
      return state.set('modals', modals);

    default:
      return state;
  }
};