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

var _interface = require('../../interface');

var _interface2 = _interopRequireDefault(_interface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// style


var styles = _interface2.default.styles.gridCol;

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