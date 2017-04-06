'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _interface = require('../../interface');

var _interface2 = _interopRequireDefault(_interface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// style


var styles = _interface2.default.styles.image;

/**
 * Image Component
 * @extends {PureComponent }
 * @class
 */

var Image = function (_PureComponent) {
  _inherits(Image, _PureComponent);

  function Image() {
    _classCallCheck(this, Image);

    return _possibleConstructorReturn(this, (Image.__proto__ || Object.getPrototypeOf(Image)).apply(this, arguments));
  }

  _createClass(Image, [{
    key: 'render',


    /**
     * render
     * @return {ReactElement} markup
     */

    /**
     * defaultProps
     * @property {Boolean} rounded
     * @property {Boolean} circle
     * @property {Boolean} thumbnail
     * @property {String} size
     * @property {String} align
     * @property {Boolean} path
     */
    value: function render() {
      var _classNames;

      var _props = this.props,
          rounded = _props.rounded,
          circle = _props.circle,
          thumbnail = _props.thumbnail,
          size = _props.size,
          path = _props.path,
          align = _props.align,
          className = _props.className,
          elementProps = _objectWithoutProperties(_props, ['rounded', 'circle', 'thumbnail', 'size', 'path', 'align', 'className']);

      var fullClassName = (0, _classnames2.default)(className, (_classNames = {}, _defineProperty(_classNames, styles[size], size), _defineProperty(_classNames, styles.rounded, rounded), _defineProperty(_classNames, styles.circle, circle), _defineProperty(_classNames, styles.thumbnail, thumbnail), _classNames));

      if (!path || path === '') {
        return null;
      }

      return _react2.default.createElement(
        'figure',
        { className: styles[align] },
        _react2.default.createElement('img', _extends({}, elementProps, {
          src: path,
          className: fullClassName
        }))
      );
    }

    /**
     * propTypes
     * @property {Boolean} rounded
     * @property {Boolean} circle
     * @property {Boolean} thumbnail
     * @property {String} size
     * @property {String} align
     * @property {String} path
     */

  }]);

  return Image;
}(_react.PureComponent);

/**
 * @example <Image />
 */


Image.defaultProps = {
  rounded: false,
  circle: false,
  thumbnail: false,
  size: 'medium',
  align: 'left',
  path: false
};
Image.propTypes = {
  rounded: _react.PropTypes.bool,
  circle: _react.PropTypes.bool,
  thumbnail: _react.PropTypes.bool,
  size: _react.PropTypes.oneOf(['small', 'medium', 'large']),
  align: _react.PropTypes.oneOf(['left', 'center', 'right']),
  path: _react.PropTypes.string.isRequired
};
exports.default = (0, _reactCssModules2.default)(Image, styles);