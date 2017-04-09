'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _svg = require('../svg');

var _svg2 = _interopRequireDefault(_svg);

var _interface = require('../../interface');

var _interface2 = _interopRequireDefault(_interface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// components

// style


var styles = _interface2.default.styles.alert;
/**
 * Alert component
 * @extends { PureComponent }
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
   * @property {String} headline
   * @property {Node} children
   */


  /**
   * propTypes
   * @property {String} type
   * @property {Function} onDismiss
   * @property {String} dismissTitle
   * @property {Boolean} showIcon
   * @property {Boolean} dark
   * @property {String} id
   * @property {String}  headline
   * @property {Node} children
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
          return 'icon/info-circle';
        case 'success':
          return 'icon/check';
        case 'warning':
          return 'icon/warning';
        case 'danger':
          return 'icon/shield';
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
        { className: fullClassName },
        onDismiss && _react2.default.createElement(
          _button2.default,
          { style: 'transparent', size: 'none', className: styles.close, title: dismissTitle, onClick: onDismiss },
          _react2.default.createElement(_svg2.default, { name: 'icon/close' })
        ),
        showIcon && _react2.default.createElement(_svg2.default, { className: styles.icon, name: icon, size: '30px' }),
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
  id: undefined,
  headline: undefined,
  children: undefined
};
Alert.propTypes = {
  type: _propTypes2.default.oneOf(['info', 'warning', 'success', 'danger']),
  onDismiss: _propTypes2.default.func,
  dismissTitle: _propTypes2.default.string,
  showIcon: _propTypes2.default.bool,
  dark: _propTypes2.default.bool,
  id: _propTypes2.default.string,
  headline: _propTypes2.default.string,
  children: _propTypes2.default.any.isRequired
};
exports.default = (0, _reactCssModules2.default)(Alert, styles);