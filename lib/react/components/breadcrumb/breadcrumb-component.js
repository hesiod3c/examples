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

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// style


var styles = _interface2.default.styles.breadcrumb;

/**
 * Breadcrumb component
 * @extends {PureComponent }
 * @class
 */

var Breadcrumb = function (_PureComponent) {
  _inherits(Breadcrumb, _PureComponent);

  function Breadcrumb() {
    _classCallCheck(this, Breadcrumb);

    return _possibleConstructorReturn(this, (Breadcrumb.__proto__ || Object.getPrototypeOf(Breadcrumb)).apply(this, arguments));
  }

  _createClass(Breadcrumb, [{
    key: 'render',

    /**
     * render
     * @return {ReactElement} markup
     */
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          elementProps = _objectWithoutProperties(_props, ['children', 'className']);

      return _react2.default.createElement(
        'ol',
        _extends({}, elementProps, {
          className: (0, _classnames2.default)(className, styles['breadcrumb-list']) }),
        children
      );
    }
  }]);

  return Breadcrumb;
}(_react.PureComponent);

/**
 * BreadcrumbItem component
 * @extends {PureComponent }
 * @class
 */


var BreadcrumbItem = function (_PureComponent2) {
  _inherits(BreadcrumbItem, _PureComponent2);

  function BreadcrumbItem() {
    _classCallCheck(this, BreadcrumbItem);

    return _possibleConstructorReturn(this, (BreadcrumbItem.__proto__ || Object.getPrototypeOf(BreadcrumbItem)).apply(this, arguments));
  }

  _createClass(BreadcrumbItem, [{
    key: 'render',


    /**
     * render
     * @return {ReactElement} markup
     */

    /**
     * defaultProps
     * @property {Boolean} url
     * @property {Boolean} text
     */
    value: function render() {
      var _props2 = this.props,
          text = _props2.text,
          url = _props2.url,
          elementProps = _objectWithoutProperties(_props2, ['text', 'url']);

      return _react2.default.createElement(
        'li',
        _extends({}, elementProps, {
          className: styles['breadcrumb-item'] }),
        url ? _react2.default.createElement(
          'a',
          { href: url, className: styles['breadcrumb-link'] },
          text
        ) : _react2.default.createElement(
          'strong',
          { className: styles['breadcrumb-text'] },
          text
        )
      );
    }

    /**
     * propTypes
     * @property {String} url
     * @property {String} text
     */

  }]);

  return BreadcrumbItem;
}(_react.PureComponent);

/**
 * @example <Breadcrumb.Item />
 */


BreadcrumbItem.defaultProps = {
  url: undefined,
  text: undefined
};
BreadcrumbItem.propTypes = {
  url: _react.PropTypes.string,
  text: _react.PropTypes.string
};
Breadcrumb.Item = BreadcrumbItem;

/**
 * @example <Breadcrumb />
 */
exports.default = (0, _reactCssModules2.default)(Breadcrumb, styles);