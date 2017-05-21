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

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _interface = require('../../../interface');

var _interface2 = _interopRequireDefault(_interface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//styles


var styles = _interface2.default.styles.button;

/**
 * Button Component
 * @extends {PureComponent }
 * @class
 */

var Button = function (_PureComponent) {
  _inherits(Button, _PureComponent);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
  }

  _createClass(Button, [{
    key: 'render',


    /**
     * render
     * @return {ReactElement} markup
     */

    /**
     * defaultProps
     * @property {Boolean} active
     * @property {Boolean} disabled
     * @property {Boolean} block
     * @property {Boolean} outline
     * @property {Boolean} rounded
     * @property {Boolean} circle
     * @property {Boolean} loading
     * @property {String} style
     * @property {String} size
     * @property {String} type
     * @property {Boolean} children
     */
    value: function render() {
      var _classNames;

      var _props = this.props,
          active = _props.active,
          outline = _props.outline,
          rounded = _props.rounded,
          circle = _props.circle,
          block = _props.block,
          style = _props.style,
          size = _props.size,
          disabled = _props.disabled,
          loading = _props.loading,
          onClick = _props.onClick,
          children = _props.children,
          type = _props.type,
          className = _props.className,
          elementProps = _objectWithoutProperties(_props, ['active', 'outline', 'rounded', 'circle', 'block', 'style', 'size', 'disabled', 'loading', 'onClick', 'children', 'type', 'className']);

      var fullClassName = (0, _classnames2.default)(className, (_classNames = {}, _defineProperty(_classNames, '' + styles[style], style), _defineProperty(_classNames, '' + styles[size], size), _defineProperty(_classNames, '' + styles.block, block), _defineProperty(_classNames, '' + styles.outline, outline), _defineProperty(_classNames, '' + styles.rounded, rounded), _defineProperty(_classNames, '' + styles.circle, circle), _defineProperty(_classNames, '' + styles.active, active), _defineProperty(_classNames, '' + styles.loading, loading), _classNames));

      if (!children) {
        return null;
      }

      return _react2.default.createElement(
        'button',
        _extends({}, elementProps, {
          type: type,
          className: fullClassName,
          onClick: onClick,
          disabled: disabled
        }),
        children
      );
    }

    /**
     * propTypes
     * @property {Boolean} active
     * @property {Boolean} disabled
     * @property {Boolean} block
     * @property {Boolean} outline
     * @property {Boolean} rounded
     * @property {Boolean} circle
     * @property {String} style
     * @property {String} loading
     * @property {String} size
     * @property {String} type
     * @property {Function} onClick
     * @property {Object} children
     */

  }]);

  return Button;
}(_react.PureComponent);

/**
 * @example <Button>Text</Button>
 */


Button.defaultProps = {
  active: false,
  disabled: false,
  block: false,
  outline: false,
  rounded: false,
  circle: false,
  loading: false,
  style: 'default',
  size: 'medium',
  type: 'button',
  children: false
};
Button.propTypes = {
  active: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  block: _propTypes2.default.bool,
  outline: _propTypes2.default.bool,
  rounded: _propTypes2.default.bool,
  circle: _propTypes2.default.bool,
  loading: _propTypes2.default.bool,
  type: _propTypes2.default.oneOf(['button', 'reset', 'submit']),
  style: _propTypes2.default.oneOf(['default', 'primary', 'success', 'info', 'warning', 'danger', 'transparent']),
  size: _propTypes2.default.oneOf(['mini', 'small', 'medium', 'large', 'none']),
  onClick: _propTypes2.default.func,
  children: _propTypes2.default.any.isRequired
};
exports.default = (0, _reactCssModules2.default)(Button, styles);