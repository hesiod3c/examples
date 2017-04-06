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


var styles = _interface2.default.styles.form;

/**
 * Form
 * @extends {PureComponent }
 * @class
 */

var Form = function (_PureComponent) {
  _inherits(Form, _PureComponent);

  /**
   * @constructor
   * @param {Object} props
   */
  function Form(props) {
    _classCallCheck(this, Form);

    return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this, props));
  }
  /**
   * defaultProps
   * @property {Boolean} onSubmit
   * @property {Style} style
   */


  /**
   * propTypes
   * @property {Function} onSubmit
   * @property {String} style
   */


  _createClass(Form, [{
    key: 'render',


    /**
     * render
     * @return {ReactElement} markup
     */
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          style = _props.style,
          onSubmit = _props.onSubmit,
          className = _props.className,
          elementProps = _objectWithoutProperties(_props, ['style', 'onSubmit', 'className']);

      return _react2.default.createElement('form', _extends({}, elementProps, {
        ref: function ref(c) {
          _this2.form = c;
        },
        onSubmit: onSubmit,
        className: (0, _classnames2.default)(className, styles[style])
      }));
    }
  }]);

  return Form;
}(_react.PureComponent);

/**
 * @example <Form onSubmit={ ()=>{} } />
 */


Form.defaultProps = {
  onSubmit: false,
  style: 'form'
};
Form.propTypes = {
  onSubmit: _react.PropTypes.func,
  style: _react.PropTypes.oneOf(['form', 'horizontal', 'inline'])
};
exports.default = (0, _reactCssModules2.default)(Form, styles);