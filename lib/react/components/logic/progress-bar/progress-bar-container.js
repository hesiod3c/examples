'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _progressBarComponent = require('./progress-bar-component');

var _progressBarComponent2 = _interopRequireDefault(_progressBarComponent);

var _progressBarActions = require('./progress-bar-actions');

var actions = _interopRequireWildcard(_progressBarActions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  var progressBar = state.toJS().reducers.progressBar;

  return {
    percent: progressBar.percent,
    progressInterval: progressBar.progressInterval,
    animationTimeout: progressBar.animationTimeout,
    loading: progressBar.loading,
    style: progressBar.style
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  var actionCreators = _extends({
    dispatch: dispatch
  }, actions);

  return { actions: (0, _redux.bindActionCreators)(actionCreators, dispatch) };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_progressBarComponent2.default);