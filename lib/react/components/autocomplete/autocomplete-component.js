'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactSelect = require('react-select');

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _interface = require('../../interface');

var _interface2 = _interopRequireDefault(_interface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// style


var styles = _interface2.default.styles.autocomplete;

/**
 * Autocomplete Component
 * @extends { PureComponent }
 * @class
 */

var Autocomplete = function (_PureComponent) {
  _inherits(Autocomplete, _PureComponent);

  function Autocomplete() {
    _classCallCheck(this, Autocomplete);

    return _possibleConstructorReturn(this, (Autocomplete.__proto__ || Object.getPrototypeOf(Autocomplete)).apply(this, arguments));
  }

  _createClass(Autocomplete, [{
    key: 'getText',

    /**
     * getText
     * @property {String} value
     */
    value: function getText(value) {
      return value;
    }

    /**
     * render
     * @return {ReactElement} markup
     */

  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          options = _props.options,
          value = _props.value,
          onChange = _props.onChange,
          placeholder = _props.placeholder,
          disabled = _props.disabled,
          name = _props.name,
          className = _props.className,
          onInputChange = _props.onInputChange,
          onBlur = _props.onBlur,
          onInputKeyDown = _props.onInputKeyDown,
          onNewOptionClick = _props.onNewOptionClick,
          newOptionCreator = _props.newOptionCreator;


      return _react2.default.createElement(_reactSelect.Creatable, {
        multi: false,
        options: options,
        onChange: onChange,
        value: value,
        placeholder: placeholder,
        disabled: disabled,
        noResultsText: 'Sem resultados',
        promptTextCreator: this.getText,
        name: name,
        className: className,
        clearable: false,
        onBlur: onBlur,
        onInputChange: onInputChange,
        onInputKeyDown: onInputKeyDown,
        onNewOptionClick: onNewOptionClick,
        newOptionCreator: newOptionCreator,
        filterOptions: function filterOptions(options, filterValue) {
          if (!options.length > 0) {
            return;
          }
          var lowerFilterValue = filterValue.toLowerCase();
          var filteredOptions = options.filter(function (option) {
            var optionValue = String(option.value).toLowerCase();
            var optionLabel = String(option.label).toLowerCase();
            return optionValue.indexOf(lowerFilterValue) > -1 || optionLabel.indexOf(lowerFilterValue) > -1;
          });

          // This is the important part
          if (filterValue.length > 0) {
            filteredOptions = filteredOptions.concat({ create: true, value: filterValue, label: '"' + filterValue + '"', type: options[0]['type'] });
          }

          return filteredOptions;
        }
      });
    }
  }]);

  return Autocomplete;
}(_react.PureComponent);

/**
 * @example <Autocomplete />
 */


exports.default = (0, _reactCssModules2.default)(Autocomplete, styles);