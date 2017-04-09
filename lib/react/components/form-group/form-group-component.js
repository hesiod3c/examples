'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _property = require('../../utils/property');

var _interface = require('../../interface');

var _interface2 = _interopRequireDefault(_interface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// style


var styles = _interface2.default.styles.formGroup;

/**
 * Form Group component
 * @extends {PureComponent }
 * @class
 */

var FormGroup = function (_PureComponent) {
  _inherits(FormGroup, _PureComponent);

  function FormGroup() {
    _classCallCheck(this, FormGroup);

    return _possibleConstructorReturn(this, (FormGroup.__proto__ || Object.getPrototypeOf(FormGroup)).apply(this, arguments));
  }

  _createClass(FormGroup, [{
    key: 'getChildContext',


    /**
     * getChildContext
     */


    /**
     * propTypes
     * @property {String} controlId
     * @property {String} style
     * @property {String} validationState
     * @property {Boolean} withoutTopLabel
     */
    value: function getChildContext() {
      var _props = this.props,
          controlId = _props.controlId,
          validationState = _props.validationState;

      var id = controlId ? controlId : (0, _property.randomId)();

      return {
        $formGroup: {
          controlId: id,
          validationState: validationState
        }
      };
    }

    /**
     * render
     * @return {ReactElement} markup
     */


    /**
     * contextTypes
     * @property {Object} $formGroup
     */

    /**
     * defaultProps
     * @property {String} controlId
     * @property {String} style
     * @property {Boolean} validationState
     * @property {Boolean} withoutTopLabel
     */

  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var _props2 = this.props,
          validationState = _props2.validationState,
          children = _props2.children,
          className = _props2.className,
          style = _props2.style,
          withoutTopLabel = _props2.withoutTopLabel;


      var validationStateClass = 'has-' + validationState;

      var formGroupClass = (0, _classnames2.default)(className, styles['form-group'], (_classNames = {}, _defineProperty(_classNames, styles[validationStateClass], validationState), _defineProperty(_classNames, styles['form-group--checkbox'], style === 'checkbox'), _defineProperty(_classNames, styles['form-group--radio'], style === 'radio'), _defineProperty(_classNames, styles['form-group--withoutTopLabel'], withoutTopLabel), _classNames));

      return _react2.default.createElement(
        'div',
        {
          className: formGroupClass
        },
        children
      );
    }
  }]);

  return FormGroup;
}(_react.PureComponent);

/**
 * @example <FormGroup></FormGroup>
 */


FormGroup.defaultProps = {
  controlId: '',
  style: false,
  validationState: false,
  withoutTopLabel: false
};
FormGroup.PropTypes = {
  controlId: _propTypes2.default.string,
  style: _propTypes2.default.oneOf(['checkbox', 'radio']),
  validationState: _propTypes2.default.oneOf(['success', 'warning', 'error']),
  withoutTopLabel: _propTypes2.default.bool
};
FormGroup.childContextTypes = {
  $formGroup: _propTypes2.default.object.isRequired
};
exports.default = (0, _reactCssModules2.default)(FormGroup, styles);