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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _interface = require('../../../interface');

var _interface2 = _interopRequireDefault(_interface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//styles


var styles = _interface2.default.styles.list;

/**
 * List Component
 * @extends {PureComponent }
 * @class
 */

var List = function (_PureComponent) {
  _inherits(List, _PureComponent);

  function List() {
    _classCallCheck(this, List);

    return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
  }

  _createClass(List, [{
    key: 'render',


    /**
     * render
     * @return {ReactElement} markup
     */

    /**
     * defaultProps
     * @property {String} style
     * @property {Boolean} bordered
     * @property {Boolean} zebra
     */
    value: function render() {
      var _classNames;

      var _props = this.props,
          children = _props.children,
          bordered = _props.bordered,
          zebra = _props.zebra,
          style = _props.style,
          className = _props.className,
          elementProps = _objectWithoutProperties(_props, ['children', 'bordered', 'zebra', 'style', 'className']);

      var fullClassName = (0, _classnames2.default)(className, (_classNames = {}, _defineProperty(_classNames, styles[style], style), _defineProperty(_classNames, styles[bordered], bordered), _defineProperty(_classNames, styles[zebra], zebra), _classNames));

      return _react2.default.createElement(
        'ul',
        _extends({}, elementProps, {
          className: fullClassName }),
        children
      );
    }

    /**
     * propTypes
     * @property {String} style
     * @property {Boolean} bordered
     * @property {Boolean} zebra
     */

  }]);

  return List;
}(_react.PureComponent);

/**
 * ListItem Component
 * @extends {PureComponent }
 * @class
 */


List.defaultProps = {
  style: 'bordered',
  bordered: false,
  zebra: false
};
List.propTypes = {
  bordered: _propTypes2.default.bool,
  zebra: _propTypes2.default.bool,
  style: _propTypes2.default.oneOf(['unstyled', 'decimal', 'disc', 'circle', 'zebra', 'bordered'])
};

var ListItem = function (_PureComponent2) {
  _inherits(ListItem, _PureComponent2);

  function ListItem() {
    _classCallCheck(this, ListItem);

    return _possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).apply(this, arguments));
  }

  _createClass(ListItem, [{
    key: 'render',

    /**
     * render
     * @return {ReactElement} markup
     */
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          className = _props2.className,
          elementProps = _objectWithoutProperties(_props2, ['children', 'className']);

      return _react2.default.createElement(
        'li',
        _extends({}, elementProps, {
          className: (0, _classnames2.default)(styles['list-item'], className) }),
        children
      );
    }
  }]);

  return ListItem;
}(_react.PureComponent);

List.Item = ListItem;

/**
 * @example <List><List.Item>text</List.Item></List>
 */
exports.default = (0, _reactCssModules2.default)(List, styles);