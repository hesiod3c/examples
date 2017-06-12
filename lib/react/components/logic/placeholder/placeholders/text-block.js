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

var _textRow = require('./text-row');

var _textRow2 = _interopRequireDefault(_textRow);

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


var widths = [97, 100, 94, 90, 98, 95, 98, 40];

var TextBlock = function (_PureComponent) {
  _inherits(TextBlock, _PureComponent);

  /**
   * constructor
   * @property {Object} props
   */
  function TextBlock(props) {
    _classCallCheck(this, TextBlock);

    var _this = _possibleConstructorReturn(this, (TextBlock.__proto__ || Object.getPrototypeOf(TextBlock)).call(this, props));

    _this.getRowStyle = _this.getRowStyle.bind(_this);
    _this.getRows = _this.getRows.bind(_this);
    return _this;
  }

  /**
   * propTypes
   * @property {Number} rows
   * @property {Number/String} lineSpacing
   * @property {Object} style
   * @property {String} className
   */


  _createClass(TextBlock, [{
    key: 'getRowStyle',
    value: function getRowStyle(i) {
      var rows = this.props.rows;


      return {
        maxHeight: 100 / (rows * 2 - 1) + '%',
        width: widths[(i + widths.length) % widths.length] + '%'
      };
    }
  }, {
    key: 'getRows',
    value: function getRows() {
      var _this2 = this;

      var _props = this.props,
          rows = _props.rows,
          lineSpacing = _props.lineSpacing;

      var range = Array.apply(null, { length: rows }); // eslint-disable-line prefer-spread
      return range.map(function (x, i) {
        return _react2.default.createElement(_textRow2.default, {
          style: _this2.getRowStyle(i),
          lineSpacing: i !== 0 ? lineSpacing : 0,
          key: i
        });
      });
    }

    /**
     * render
     * @return {ReactElement} markup
     */

  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          style = _props2.style,
          className = _props2.className;


      var classes = [styles.textBlock, className].filter(function (c) {
        return c;
      }).join(' ');

      return _react2.default.createElement(
        'div',
        { className: classes, style: _extends({}, style) },
        this.getRows()
      );
    }
  }]);

  return TextBlock;
}(_react.PureComponent);

TextBlock.propTypes = {
  rows: _propTypes2.default.number.isRequired,
  lineSpacing: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  style: _propTypes2.default.object,
  className: _propTypes2.default.string
};
exports.default = (0, _reactCssModules2.default)(TextBlock, styles);