'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _CSSTransitionGroup = require('react-transition-group/CSSTransitionGroup');

var _CSSTransitionGroup2 = _interopRequireDefault(_CSSTransitionGroup);

var _alert = require('../../theme/alert');

var _alert2 = _interopRequireDefault(_alert);

var _interface = require('../../../interface');

var _interface2 = _interopRequireDefault(_interface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//styles


var styles = _interface2.default.styles.notifierManager;

/**
 * Notifier component
 * @extends {PureComponent }
 * @class
 */

var Notifier = function (_PureComponent) {
  _inherits(Notifier, _PureComponent);

  /**
   * @constructor
   * @param {Object} props
   */
  function Notifier(props) {
    _classCallCheck(this, Notifier);

    var _this = _possibleConstructorReturn(this, (Notifier.__proto__ || Object.getPrototypeOf(Notifier)).call(this, props));

    _this.dismissAlert = _this.dismissAlert.bind(_this);
    return _this;
  }

  /**
   * defaultProps
   * @param {String} position
   * @param {Array} alerts
   */


  /**
   * propTypes
   * @param {String} position
   * @param {Array} alerts
   * @param {Array} onDismiss
   * @param {Number} timeout
   * @param {String} dismissTitle
   * @param {Boolean} showIcon
   */


  _createClass(Notifier, [{
    key: 'dismissAlert',
    value: function dismissAlert(onDismiss) {
      // actually dismiss the alert
      onDismiss();
    }

    /**
     * render
     * @return {ReactElement} markup
     */

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          position = _props.position,
          alerts = _props.alerts,
          onDismiss = _props.onDismiss,
          timeout = _props.timeout,
          elementProps = _objectWithoutProperties(_props, ['position', 'alerts', 'onDismiss', 'timeout']);

      var fullClassName = (0, _classnames2.default)(styles.container, _defineProperty({}, styles[position], position));

      return _react2.default.createElement(
        'div',
        { className: fullClassName },
        _react2.default.createElement(
          _CSSTransitionGroup2.default,
          { transitionName: styles, transitionEnterTimeout: 500, transitionLeaveTimeout: 300 },
          alerts && alerts.map(function (item) {
            var dismiss = onDismiss ? function () {
              return onDismiss(item);
            } : null;

            var message = item.message,
                alertProps = _objectWithoutProperties(item, ['message']);

            // TODO: improvement for the timeout controller


            if (timeout && onDismiss) {
              setTimeout(function () {
                onDismiss(item);
              }, timeout + 500 + 300);
            }

            return _react2.default.createElement(
              _alert2.default,
              _extends({ key: item.id }, elementProps, alertProps, { onDismiss: _this2.dismissAlert.bind(_this2, dismiss), dark: true, showIcon: true }),
              message
            );
          })
        )
      );
    }
  }]);

  return Notifier;
}(_react.PureComponent);

/**
 * @example <Notifier />
 */


Notifier.defaultProps = {
  position: 'top-right',
  alerts: []
};
Notifier.propTypes = {
  position: _propTypes2.default.oneOf(['top-right', 'top-left', 'bottom-right', 'bottom-left']),
  alerts: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    name: _propTypes2.default.string.isRequired,
    id: _propTypes2.default.any.isRequired,
    type: _propTypes2.default.oneOf(['info', 'success', 'warning', 'danger']),
    headline: _propTypes2.default.string,
    message: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.node, _propTypes2.default.object]).isRequired
  })).isRequired,
  onDismiss: _propTypes2.default.func,
  timeout: _propTypes2.default.number,
  dismissTitle: _propTypes2.default.string,
  showIcon: _propTypes2.default.bool
};
exports.default = (0, _reactCssModules2.default)(Notifier, styles);