'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// style
var styles = {
  'row': 'grid-row_row_16X0_',
  'reverse': 'grid-row_reverse_34PIZ',
  'start-xs': 'grid-row_start-xs_10bJH',
  'center-xs': 'grid-row_center-xs_mn1ew',
  'end-xs': 'grid-row_end-xs_3Fg77',
  'top-xs': 'grid-row_top-xs_2McLs',
  'middle-xs': 'grid-row_middle-xs_1ZovU',
  'bottom-xs': 'grid-row_bottom-xs_s5sDB',
  'around-xs': 'grid-row_around-xs_2LS5j',
  'between-xs': 'grid-row_between-xs_3nDc4',
  'first-xs': 'grid-row_first-xs_2N6uw',
  'last-xs': 'grid-row_last-xs_4q2nq',
  'start-sm': 'grid-row_start-sm_3Nkin',
  'center-sm': 'grid-row_center-sm_mRGXJ',
  'end-sm': 'grid-row_end-sm_3AnDO',
  'top-sm': 'grid-row_top-sm_18o5F',
  'middle-sm': 'grid-row_middle-sm_2cSUz',
  'bottom-sm': 'grid-row_bottom-sm_2uxrR',
  'around-sm': 'grid-row_around-sm_3c1OD',
  'between-sm': 'grid-row_between-sm_3LTlZ',
  'first-sm': 'grid-row_first-sm_1ueTy',
  'last-sm': 'grid-row_last-sm_2gN_g',
  'start-md': 'grid-row_start-md_1afrK',
  'center-md': 'grid-row_center-md_34bdH',
  'end-md': 'grid-row_end-md_3rya9',
  'top-md': 'grid-row_top-md_jppYr',
  'middle-md': 'grid-row_middle-md_r9IZC',
  'bottom-md': 'grid-row_bottom-md_3wUZq',
  'around-md': 'grid-row_around-md_1guLW',
  'between-md': 'grid-row_between-md_FKjqi',
  'first-md': 'grid-row_first-md_1Na8C',
  'last-md': 'grid-row_last-md_13OgR',
  'start-lg': 'grid-row_start-lg_3uXp4',
  'center-lg': 'grid-row_center-lg_2syMg',
  'end-lg': 'grid-row_end-lg_2cWcf',
  'top-lg': 'grid-row_top-lg_1oK0H',
  'middle-lg': 'grid-row_middle-lg_1Pwp-',
  'bottom-lg': 'grid-row_bottom-lg_1QJLR',
  'around-lg': 'grid-row_around-lg_3oA0W',
  'between-lg': 'grid-row_between-lg_33Lpr',
  'first-lg': 'grid-row_first-lg_1p6vA',
  'last-lg': 'grid-row_last-lg_1dVcd'
};

/**
 * GridRow component
 * @extends {PureComponent }
 * @class
 */

var GridRow = function (_PureComponent) {
  _inherits(GridRow, _PureComponent);

  function GridRow() {
    _classCallCheck(this, GridRow);

    return _possibleConstructorReturn(this, (GridRow.__proto__ || Object.getPrototypeOf(GridRow)).apply(this, arguments));
  }

  _createClass(GridRow, [{
    key: 'render',


    /**
     * render
     * @return {ReactElement} markup
     */
    value: function render() {
      var _classNames;

      var _props = this.props,
          reverse = _props.reverse,
          start = _props.start,
          center = _props.center,
          end = _props.end,
          top = _props.top,
          middle = _props.middle,
          bottom = _props.bottom,
          around = _props.around,
          between = _props.between,
          first = _props.first,
          last = _props.last,
          elementProps = _objectWithoutProperties(_props, ['reverse', 'start', 'center', 'end', 'top', 'middle', 'bottom', 'around', 'between', 'first', 'last']);

      var fullClass = (0, _classnames2.default)(styles['row'], (_classNames = {}, _defineProperty(_classNames, styles['reverse'], reverse), _defineProperty(_classNames, styles['start-' + start], start), _defineProperty(_classNames, styles['center-' + center], center), _defineProperty(_classNames, styles['end-' + end], end), _defineProperty(_classNames, styles['top-' + top], top), _defineProperty(_classNames, styles['middle-' + middle], middle), _defineProperty(_classNames, styles['bottom-' + bottom], bottom), _defineProperty(_classNames, styles['around-' + around], around), _defineProperty(_classNames, styles['between-' + between], between), _defineProperty(_classNames, styles['first-' + first], first), _defineProperty(_classNames, styles['last-' + last], last), _classNames));

      return _react2.default.createElement(
        'div',
        _extends({}, elementProps, {
          className: fullClass
        }),
        this.props.children
      );
    }
    /**
     * propTypes
     * @property {Boolean} reverse
     * @property {String} start
     * @property {String} center
     * @property {String} end
     * @property {String} top
     * @property {String} middle
     * @property {String} bottom
     * @property {String} around
     * @property {String} between
     * @property {String} last
     * @property {Node} children
     */

  }]);

  return GridRow;
}(_react.PureComponent);

/**
 * @example <GridRow />
 */


GridRow.propTypes = {
  reverse: _react.PropTypes.bool,
  start: _react.PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  center: _react.PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  end: _react.PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  top: _react.PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  middle: _react.PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  bottom: _react.PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  around: _react.PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  between: _react.PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  first: _react.PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  last: _react.PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  children: _react.PropTypes.node
};
exports.default = (0, _reactCssModules2.default)(GridRow, styles);