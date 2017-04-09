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

var _interface = require('../../interface');

var _interface2 = _interopRequireDefault(_interface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// style


var styles = _interface2.default.styles.formLabel;

/**
 * Form Label component
 * @extends {PureComponent }
 * @class
 */

var FormLabel = function (_PureComponent) {
  _inherits(FormLabel, _PureComponent);

  /**
   * @constructor
   * @param {Object} props
   */
  function FormLabel(props, context) {
    _classCallCheck(this, FormLabel);

    return _possibleConstructorReturn(this, (FormLabel.__proto__ || Object.getPrototypeOf(FormLabel)).call(this, props, context));
  }

  /**
   * defaultProps
   * @property {Boolean} addon
   */


  /**
   * propTypes
   * @property {Node} addon
   * @property {Node} children
   */


  /**
   * contextTypes
   * @property {Object} $formGroup
   */


  _createClass(FormLabel, [{
    key: 'render',


    /**
     * render
     * @return {ReactElement} markup
     */
    value: function render() {
      var _props = this.props,
          addon = _props.addon,
          children = _props.children,
          className = _props.className,
          elementProps = _objectWithoutProperties(_props, ['addon', 'children', 'className']);

      var fullClassName = (0, _classnames2.default)(className, styles.label);

      // context
      var formGroup = this.context.$formGroup;
      var controlId = formGroup && formGroup.controlId || undefined;

      if (!addon && !children) {
        return null;
      }

      return _react2.default.createElement(
        'label',
        _extends({}, elementProps, {
          className: fullClassName,
          htmlFor: controlId }),
        children,
        addon && _react2.default.createElement(
          'span',
          { className: styles['label-addon'] },
          addon
        )
      );
    }
  }]);

  return FormLabel;
}(_react.PureComponent);

/**
 * @example <FormLabel></FormLabel>
 */


FormLabel.defaultProps = {
  addon: undefined
};
FormLabel.propTypes = {
  addon: _propTypes2.default.node,
  children: _propTypes2.default.node
};
FormLabel.contextTypes = {
  $formGroup: _propTypes2.default.object
};
exports.default = (0, _reactCssModules2.default)(FormLabel, styles);