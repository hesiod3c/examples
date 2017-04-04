'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _svgIconPack = require('./svg-icon-pack');

var _svgIconPack2 = _interopRequireDefault(_svgIconPack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * SvgIcon component
 * @extends {PureComponent }
 * @class
 */
var SvgIcon = function (_PureComponent) {
  _inherits(SvgIcon, _PureComponent);

  function SvgIcon() {
    _classCallCheck(this, SvgIcon);

    return _possibleConstructorReturn(this, (SvgIcon.__proto__ || Object.getPrototypeOf(SvgIcon)).apply(this, arguments));
  }

  _createClass(SvgIcon, [{
    key: '_mergeStyles',

    /**
     * Merge styles
     * @param {...string} args
     */

    /**
     * defaultProps
     * @property {size}
     * @property {name}
     */
    value: function _mergeStyles() {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return Object.assign.apply(Object, [{}].concat(args));
    }

    /**
     * render
     * @return {ReactElement} markup
     */

    /**
     * propTypes
     * @property {name}
     * @property {color}
     * @property {size}
     * @property {style}
     */

  }, {
    key: 'render',
    value: function render() {
      var styles = {
        fill: this.props.color,
        verticalAlign: "middle",
        width: this.props.size, // CSS instead of the width attr to support non-pixel units
        height: this.props.size // Prevents scaling issue in IE
      };

      var _props = this.props,
          name = _props.name,
          className = _props.className,
          elementProps = _objectWithoutProperties(_props, ['name', 'className']);

      return _react2.default.createElement(
        'svg',
        _extends({}, elementProps, {
          viewBox: '0 0 1792 1792',
          preserveAspectRatio: 'xMidYMid meet',
          className: className,
          style: this._mergeStyles(styles, this.props.style) }),
        _react2.default.createElement('path', { d: _svgIconPack2.default[name] })
      );
    }
  }]);

  return SvgIcon;
}(_react.PureComponent);

/**
 * @example <SvgIcon />
 */


SvgIcon.defaultProps = {
  size: 16,
  name: 'user'
};
SvgIcon.propTypes = {
  name: _react.PropTypes.string,
  color: _react.PropTypes.string,
  size: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
  style: _react.PropTypes.object
};
exports.default = SvgIcon;