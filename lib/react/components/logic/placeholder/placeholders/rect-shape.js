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
var styles = {
  'text': 'placeholder_text_2eU0P',
  'rect': 'placeholder_rect_kGiGd',
  'round': 'placeholder_round_1JtuS',
  'placeHolderShimmer': 'placeholder_placeHolderShimmer_gT9ly',
  'media': 'placeholder_media_1eMMe',
  'media-round': 'placeholder_media-round_1pSeE',
  'textBlock': 'placeholder_textBlock_1IMdc'
};

var RectShape = function (_PureComponent) {
  _inherits(RectShape, _PureComponent);

  function RectShape() {
    _classCallCheck(this, RectShape);

    return _possibleConstructorReturn(this, (RectShape.__proto__ || Object.getPrototypeOf(RectShape)).apply(this, arguments));
  }

  _createClass(RectShape, [{
    key: 'render',


    /**
     * render
     * @return {ReactElement} markup
     */
    value: function render() {
      var _props = this.props,
          className = _props.className,
          style = _props.style;

      var classes = [styles.rect, className].filter(function (c) {
        return c;
      }).join(' ');

      return _react2.default.createElement('div', { className: classes, style: _extends({}, style) });
    }
    /**
     * propTypes
     * @property {String} className
     * @property {Object} style
     */

  }]);

  return RectShape;
}(_react.PureComponent);

RectShape.propTypes = {
  className: _propTypes2.default.string,
  style: _propTypes2.default.object
};
exports.default = (0, _reactCssModules2.default)(RectShape, styles);