'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _svgIcon = require('../svg-icon');

var _svgIcon2 = _interopRequireDefault(_svgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// components


// style
var styles = {
  'success': 'alert_success_2id5p',
  'info': 'alert_info_1Cug1',
  'warning': 'alert_warning_o_9AU',
  'danger': 'alert_danger_soSLh',
  'alert--dark': 'alert_alert--dark_hwV8k',
  'headline': 'alert_headline_1bJXz',
  'body': 'alert_body_3yIbR',
  'msgContainer': 'alert_msgContainer_1eZrB',
  'alert--icon': 'alert_alert--icon_3PjH4',
  'close': 'alert_close_3AA5C',
  'icon': 'alert_icon_2_Ib7'
};

/**
 * Alert component
 * @extends {PureComponent }
 * @class
 */

var Alert = function (_PureComponent) {
  _inherits(Alert, _PureComponent);

  /**
   * @constructor
   * @param {Object} props
   */
  function Alert(props) {
    _classCallCheck(this, Alert);

    var _this = _possibleConstructorReturn(this, (Alert.__proto__ || Object.getPrototypeOf(Alert)).call(this, props));

    _this.getIcon = _this.getIcon.bind(_this);
    return _this;
  }

  /**
   * defaultProps
   * @property {String} type
   * @property {Function} onDismiss
   * @property {String} dismissTitle
   * @property {Boolean} showIcon
   * @property {Boolean} dark
   * @property {String} id
   */


  /**
   * propTypes
   * @property {String} type
   * @property {Function} onDismiss
   * @property {String} dismissTitle
   * @property {Boolean} showIcon
   * @property {Boolean} dark
   * @property {String} id
   */


  _createClass(Alert, [{
    key: 'getIcon',


    /**
     * getIcon
     * @property {String} type
     */
    value: function getIcon(type) {
      switch (type) {
        case 'info':
          return 'info-circle';
        case 'success':
          return 'check';
        case 'warning':
          return 'warning';
        case 'danger':
          return 'shield';
      }
    }

    /**
     * render
     * @return {ReactElement} markup
     */

  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          onDismiss = _props.onDismiss,
          children = _props.children,
          type = _props.type,
          headline = _props.headline,
          dismissTitle = _props.dismissTitle,
          showIcon = _props.showIcon,
          dark = _props.dark;

      var fullClassName = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, styles.dismissable, onDismiss), _defineProperty(_classNames, styles[type], type), _defineProperty(_classNames, styles['alert--dark'], dark), _defineProperty(_classNames, styles['alert--icon'], showIcon), _classNames));
      var icon = this.getIcon(type);

      if (!children) {
        return null;
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: fullClassName },
          onDismiss && _react2.default.createElement(
            _button2.default,
            { className: styles.close, title: dismissTitle, onClick: onDismiss },
            '\xD7'
          ),
          showIcon && _react2.default.createElement(_svgIcon2.default, { className: styles.icon, name: icon, size: '30px' }),
          _react2.default.createElement(
            'div',
            { className: styles.msgContainer },
            headline ? _react2.default.createElement(
              'h4',
              { className: styles.headline },
              headline
            ) : null,
            _react2.default.createElement(
              'div',
              { className: styles.body },
              children
            )
          )
        )
      );
    }
  }]);

  return Alert;
}(_react.PureComponent);

/**
 * @example <Alert />
 */


Alert.defaultProps = {
  type: 'info',
  onDismiss: undefined,
  dismissTitle: 'Notificação',
  showIcon: false,
  dark: false,
  id: ''
};
Alert.propTypes = {
  type: _react.PropTypes.oneOf(['info', 'warning', 'success', 'danger']),
  onDismiss: _react.PropTypes.func,
  dismissTitle: _react.PropTypes.string,
  showIcon: _react.PropTypes.bool,
  dark: _react.PropTypes.bool,
  id: _react.PropTypes.string
};
exports.default = (0, _reactCssModules2.default)(Alert, styles);