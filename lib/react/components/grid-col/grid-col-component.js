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
  'col': 'grid-col_col_1P5ZG',
  'reverse': 'grid-col_reverse_1Ys0x',
  'col-xs': 'grid-col_col-xs_3grdL',
  'col-xs-1': 'grid-col_col-xs-1_1dHtM',
  'col-xs-2': 'grid-col_col-xs-2_25nrv',
  'col-xs-3': 'grid-col_col-xs-3_1hSXz',
  'col-xs-4': 'grid-col_col-xs-4_1nnD9',
  'col-xs-5': 'grid-col_col-xs-5_t6ojE',
  'col-xs-6': 'grid-col_col-xs-6_1lJ7H',
  'col-xs-7': 'grid-col_col-xs-7_1BTHm',
  'col-xs-8': 'grid-col_col-xs-8_v0BHx',
  'col-xs-9': 'grid-col_col-xs-9_1ntYY',
  'col-xs-10': 'grid-col_col-xs-10_1wa9p',
  'col-xs-11': 'grid-col_col-xs-11_2idSi',
  'col-xs-12': 'grid-col_col-xs-12_11F8s',
  'col-xs-offset-1': 'grid-col_col-xs-offset-1_1js6m',
  'col-xs-offset-2': 'grid-col_col-xs-offset-2_1a_60',
  'col-xs-offset-3': 'grid-col_col-xs-offset-3_1ijZ5',
  'col-xs-offset-4': 'grid-col_col-xs-offset-4_1-fVz',
  'col-xs-offset-5': 'grid-col_col-xs-offset-5_1LPxf',
  'col-xs-offset-6': 'grid-col_col-xs-offset-6_1TwLL',
  'col-xs-offset-7': 'grid-col_col-xs-offset-7_JaYuU',
  'col-xs-offset-8': 'grid-col_col-xs-offset-8_1Jtc_',
  'col-xs-offset-9': 'grid-col_col-xs-offset-9_32t3q',
  'col-xs-offset-10': 'grid-col_col-xs-offset-10_1PUCX',
  'col-xs-offset-11': 'grid-col_col-xs-offset-11_Qw40k',
  'col-xs-offset-12': 'grid-col_col-xs-offset-12_5k0aG',
  'col-sm': 'grid-col_col-sm_2M-0P',
  'col-sm-1': 'grid-col_col-sm-1_2tUCC',
  'col-sm-2': 'grid-col_col-sm-2_2SXkT',
  'col-sm-3': 'grid-col_col-sm-3__EYKI',
  'col-sm-4': 'grid-col_col-sm-4_3dEeF',
  'col-sm-5': 'grid-col_col-sm-5_2GORn',
  'col-sm-6': 'grid-col_col-sm-6_35DHl',
  'col-sm-7': 'grid-col_col-sm-7_1RJPZ',
  'col-sm-8': 'grid-col_col-sm-8_3Xq6R',
  'col-sm-9': 'grid-col_col-sm-9_2pRb5',
  'col-sm-10': 'grid-col_col-sm-10_xgtfg',
  'col-sm-11': 'grid-col_col-sm-11_2uEXj',
  'col-sm-12': 'grid-col_col-sm-12_2t3DZ',
  'col-sm-offset-1': 'grid-col_col-sm-offset-1_1eLDO',
  'col-sm-offset-2': 'grid-col_col-sm-offset-2_3O98U',
  'col-sm-offset-3': 'grid-col_col-sm-offset-3_Bc0m-',
  'col-sm-offset-4': 'grid-col_col-sm-offset-4_3wRDK',
  'col-sm-offset-5': 'grid-col_col-sm-offset-5_qPhnM',
  'col-sm-offset-6': 'grid-col_col-sm-offset-6_3qQVd',
  'col-sm-offset-7': 'grid-col_col-sm-offset-7_2bYhZ',
  'col-sm-offset-8': 'grid-col_col-sm-offset-8_1dg--',
  'col-sm-offset-9': 'grid-col_col-sm-offset-9_10v7f',
  'col-sm-offset-10': 'grid-col_col-sm-offset-10_3wuxq',
  'col-sm-offset-11': 'grid-col_col-sm-offset-11_CJGNi',
  'col-sm-offset-12': 'grid-col_col-sm-offset-12_C5exp',
  'col-md': 'grid-col_col-md_kMuRG',
  'col-md-1': 'grid-col_col-md-1_W-fuF',
  'col-md-2': 'grid-col_col-md-2_3YLHC',
  'col-md-3': 'grid-col_col-md-3_TUUJv',
  'col-md-4': 'grid-col_col-md-4_1a6Cg',
  'col-md-5': 'grid-col_col-md-5_21Psr',
  'col-md-6': 'grid-col_col-md-6_2sREy',
  'col-md-7': 'grid-col_col-md-7_GrLWk',
  'col-md-8': 'grid-col_col-md-8_1cp4U',
  'col-md-9': 'grid-col_col-md-9_FMhGR',
  'col-md-10': 'grid-col_col-md-10_7aiNe',
  'col-md-11': 'grid-col_col-md-11_1vJl_',
  'col-md-12': 'grid-col_col-md-12_1dkOd',
  'col-md-offset-1': 'grid-col_col-md-offset-1_2q_bK',
  'col-md-offset-2': 'grid-col_col-md-offset-2_1_B4g',
  'col-md-offset-3': 'grid-col_col-md-offset-3_2Vk7X',
  'col-md-offset-4': 'grid-col_col-md-offset-4_3qUzr',
  'col-md-offset-5': 'grid-col_col-md-offset-5_3hqjd',
  'col-md-offset-6': 'grid-col_col-md-offset-6_3pY25',
  'col-md-offset-7': 'grid-col_col-md-offset-7_3UPyz',
  'col-md-offset-8': 'grid-col_col-md-offset-8_2NwKu',
  'col-md-offset-9': 'grid-col_col-md-offset-9_1-O4r',
  'col-md-offset-10': 'grid-col_col-md-offset-10_36Oar',
  'col-md-offset-11': 'grid-col_col-md-offset-11_2cu5h',
  'col-md-offset-12': 'grid-col_col-md-offset-12_Xm36_',
  'col-lg': 'grid-col_col-lg_1lsl8',
  'col-lg-1': 'grid-col_col-lg-1_aWJpl',
  'col-lg-2': 'grid-col_col-lg-2_1wsE4',
  'col-lg-3': 'grid-col_col-lg-3_2Qrph',
  'col-lg-4': 'grid-col_col-lg-4_2sTRL',
  'col-lg-5': 'grid-col_col-lg-5_224pq',
  'col-lg-6': 'grid-col_col-lg-6_gwXzY',
  'col-lg-7': 'grid-col_col-lg-7_d9qFo',
  'col-lg-8': 'grid-col_col-lg-8_25isR',
  'col-lg-9': 'grid-col_col-lg-9_yzgBL',
  'col-lg-10': 'grid-col_col-lg-10_2SSyF',
  'col-lg-11': 'grid-col_col-lg-11_14jJ7',
  'col-lg-12': 'grid-col_col-lg-12_1vnnJ',
  'col-lg-offset-1': 'grid-col_col-lg-offset-1_3FKI8',
  'col-lg-offset-2': 'grid-col_col-lg-offset-2_2wmdg',
  'col-lg-offset-3': 'grid-col_col-lg-offset-3_2IKhd',
  'col-lg-offset-4': 'grid-col_col-lg-offset-4_1IsKJ',
  'col-lg-offset-5': 'grid-col_col-lg-offset-5_3Cm9H',
  'col-lg-offset-6': 'grid-col_col-lg-offset-6_1hULB',
  'col-lg-offset-7': 'grid-col_col-lg-offset-7_1Ybwx',
  'col-lg-offset-8': 'grid-col_col-lg-offset-8_37mj1',
  'col-lg-offset-9': 'grid-col_col-lg-offset-9_3dTco',
  'col-lg-offset-10': 'grid-col_col-lg-offset-10_2-ksL',
  'col-lg-offset-11': 'grid-col_col-lg-offset-11_14G2h',
  'col-lg-offset-12': 'grid-col_col-lg-offset-12_2Kjh8'
};

/**
 * GridCol component
 * @extends {PureComponent }
 * @class
 */

var GridCol = function (_PureComponent) {
  _inherits(GridCol, _PureComponent);

  function GridCol() {
    _classCallCheck(this, GridCol);

    return _possibleConstructorReturn(this, (GridCol.__proto__ || Object.getPrototypeOf(GridCol)).apply(this, arguments));
  }

  _createClass(GridCol, [{
    key: 'render',


    /**
     * render
     * @return {ReactElement} markup
     */
    value: function render() {
      var _classNames;

      var _props = this.props,
          xs = _props.xs,
          sm = _props.sm,
          md = _props.md,
          lg = _props.lg,
          xsOffset = _props.xsOffset,
          smOffset = _props.smOffset,
          mdOffset = _props.mdOffset,
          lgOffset = _props.lgOffset,
          reverse = _props.reverse,
          children = _props.children,
          elementProps = _objectWithoutProperties(_props, ['xs', 'sm', 'md', 'lg', 'xsOffset', 'smOffset', 'mdOffset', 'lgOffset', 'reverse', 'children']);

      var fullClass = (0, _classnames2.default)(styles['col'], (_classNames = {}, _defineProperty(_classNames, styles['col-xs-' + xs], xs), _defineProperty(_classNames, styles['col-sm-' + sm], sm), _defineProperty(_classNames, styles['col-md-' + md], md), _defineProperty(_classNames, styles['col-lg-' + lg], lg), _defineProperty(_classNames, styles['col-xs-offset-' + xsOffset], xsOffset), _defineProperty(_classNames, styles['col-sm-offset-' + smOffset], smOffset), _defineProperty(_classNames, styles['col-md-offset-' + mdOffset], mdOffset), _defineProperty(_classNames, styles['col-lg-offset-' + lgOffset], lgOffset), _defineProperty(_classNames, styles['reverse'], reverse), _classNames));

      return _react2.default.createElement(
        'div',
        _extends({}, elementProps, {
          className: fullClass
        }),
        children
      );
    }
    /**
     * propTypes
     * @property {Number/Boolean} xs
     * @property {Number/Boolean} sm
     * @property {Number/Boolean} md
     * @property {Number/Boolean} lg
     * @property {Number} xsOffset
     * @property {Number} smOffset
     * @property {Number} mdOffset
     * @property {Number} lgOffset
     * @property {Boolean} reverse
     * @property {Node} children
     */

  }]);

  return GridCol;
}(_react.PureComponent);

/**
 * @example <GridCol />
 */


GridCol.propTypes = {
  xs: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.bool]),
  sm: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.bool]),
  md: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.bool]),
  lg: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.bool]),
  xsOffset: _react.PropTypes.number,
  smOffset: _react.PropTypes.number,
  mdOffset: _react.PropTypes.number,
  lgOffset: _react.PropTypes.number,
  reverse: _react.PropTypes.bool,
  children: _react.PropTypes.node
};
exports.default = (0, _reactCssModules2.default)(GridCol, styles);