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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// style
var styles = {};

var TextRow = function (_PureComponent) {
  _inherits(TextRow, _PureComponent);

  function TextRow() {
    _classCallCheck(this, TextRow);

    return _possibleConstructorReturn(this, (TextRow.__proto__ || Object.getPrototypeOf(TextRow)).apply(this, arguments));
  }

  _createClass(TextRow, [{
    key: 'render',


    /**
     * render
     * @return {ReactElement} markup
     */

    /**
     * propTypes
     * @property {String} className
     * @property {Number/String} lineSpacing
     * @property {Object} style
     */
    value: function render() {
      var _props = this.props,
          className = _props.className,
          maxHeight = _props.maxHeight,
          lineSpacing = _props.lineSpacing,
          style = _props.style;


      var defaultStyles = {
        maxHeight: maxHeight,
        marginTop: lineSpacing
      };

      var classes = [styles.text, className].filter(function (c) {
        return c;
      }).join(' ');

      return _react2.default.createElement('div', {
        className: classes,
        style: _extends({}, defaultStyles, style)
      });
    }

    /**
     * defaultProps
     * @property {Number/String} lineSpacing
     */

  }]);

  return TextRow;
}(_react.PureComponent);

TextRow.propTypes = {
  className: _propTypes2.default.string,
  lineSpacing: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  style: _propTypes2.default.object
};
TextRow.defaultProps = {
  lineSpacing: '0.7em'
};
exports.default = (0, _reactCssModules2.default)(TextRow, styles);