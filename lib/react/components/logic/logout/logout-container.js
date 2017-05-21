'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reactRedux = require('react-redux');

var _logoutComponent = require('./logout-component');

var _logoutComponent2 = _interopRequireDefault(_logoutComponent);

var _modalManagerActions = require('../modal-manager/modal-manager-actions');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  var modalManager = state.toJS().reducers.modalManager;

  return {
    modal: modalManager.modals
  };
};

var mergeProps = function mergeProps(stateProps, dispatchProps, ownProps) {
  var dispatch = dispatchProps.dispatch;

  return _extends({}, ownProps, stateProps, {
    onLogout: function onLogout(callback) {
      dispatch((0, _modalManagerActions.modalHide)('LOGOUT_HIDE_MODAL', 'logoutModal'));
      callback();
    },
    showModal: function showModal(id, header, body, footer, actionButton) {
      dispatch((0, _modalManagerActions.modalShow)('LOGOUT_SHOW_MODAL', id, header, body, footer, actionButton));
    },
    hideModal: function hideModal(item) {
      dispatch((0, _modalManagerActions.modalHide)('LOGOUT_HIDE_MODAL', item.id));
    }
  });
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, null, mergeProps)(_logoutComponent2.default);