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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _svg = require('../svg');

var _svg2 = _interopRequireDefault(_svg);

var _interface = require('../../interface');

var _interface2 = _interopRequireDefault(_interface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// components

// style


var styles = _interface2.default.styles.tag;

/**
 * Tag component
 * @extends {PureComponent }
 * @class
 */

var Tag = function (_PureComponent) {
  _inherits(Tag, _PureComponent);

  /**
   * @constructor
   * @param {Object} props
   */
  function Tag(props) {
    _classCallCheck(this, Tag);

    return _possibleConstructorReturn(this, (Tag.__proto__ || Object.getPrototypeOf(Tag)).call(this, props));
  }

  /**
   * defaultProps
   * @property {Boolean} children
   */


  /**
   * propTypes
   * @property {Function} onClick
   * @property {Object} children
   */


  _createClass(Tag, [{
    key: 'render',


    /**
     * render
     * @return {ReactElement} markup
     */
    value: function render() {
      var _props = this.props,
          key = _props.key,
          children = _props.children,
          onRemove = _props.onRemove,
          className = _props.className,
          elementProps = _objectWithoutProperties(_props, ['key', 'children', 'onRemove', 'className']);

      if (!children) {
        return null;
      }

      return _react2.default.createElement(
        'div',
        _extends({}, elementProps, {
          key: key,
          className: (0, _classnames2.default)(className, styles.tag)
        }),
        children,
        _react2.default.createElement(
          'span',
          { className: styles['tag-close'] },
          _react2.default.createElement(
            _button2.default,
            { onClick: onRemove },
            _react2.default.createElement(_svg2.default, { name: 'icon/close', size: '12px' })
          )
        )
      );
    }
  }]);

  return Tag;
}(_react.PureComponent);

/**
 * @example <Tag />
 */


Tag.defaultProps = {
  children: false
};
Tag.propTypes = {
  onClick: _propTypes2.default.func,
  children: _propTypes2.default.any.isRequired
};
exports.default = (0, _reactCssModules2.default)(Tag, styles);