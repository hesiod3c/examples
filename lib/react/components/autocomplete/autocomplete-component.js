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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// style
var styles = {
  'Select': 'autocomplete_Select_385Q6',
  'is-disabled': 'autocomplete_is-disabled_9KmmQ',
  'Select-control': 'autocomplete_Select-control_4_kNe',
  'Select-arrow-zone': 'autocomplete_Select-arrow-zone_11dZJ',
  'Select-input': 'autocomplete_Select-input_2Jw-3',
  'is-searchable': 'autocomplete_is-searchable_3sSJb',
  'is-open': 'autocomplete_is-open_ygFJs',
  'Select-arrow': 'autocomplete_Select-arrow_3852-',
  'is-focused': 'autocomplete_is-focused_3LfP3',
  'Select-placeholder': 'autocomplete_Select-placeholder_3kbC5',
  'Select--single': 'autocomplete_Select--single_3_H6F',
  'Select-value': 'autocomplete_Select-value_1McBv',
  'has-value': 'autocomplete_has-value_10YJY',
  'Select-value-label': 'autocomplete_Select-value-label_26dR9',
  'is-pseudo-focused': 'autocomplete_is-pseudo-focused_2fby8',
  'Select-loading-zone': 'autocomplete_Select-loading-zone_nTR4t',
  'Select-loading': 'autocomplete_Select-loading_oPsNC',
  'Select-animation-spin': 'autocomplete_Select-animation-spin_3Ae9E',
  'Select-clear-zone': 'autocomplete_Select-clear-zone_3HVrJ',
  'Select-animation-fadeIn': 'autocomplete_Select-animation-fadeIn_3Taxx',
  'Select-clear': 'autocomplete_Select-clear_2Fmn6',
  'Select--multi': 'autocomplete_Select--multi_3nHiP',
  'Select-multi-value-wrapper': 'autocomplete_Select-multi-value-wrapper_1sbEv',
  'Select-aria-only': 'autocomplete_Select-aria-only_35Brt',
  'Select-menu-outer': 'autocomplete_Select-menu-outer_1zgF_',
  'Select-menu': 'autocomplete_Select-menu_Sf4n4',
  'Select-option': 'autocomplete_Select-option_1P-sL',
  'is-selected': 'autocomplete_is-selected_1Kz7u',
  'Select-noresults': 'autocomplete_Select-noresults_1yVyM',
  'Select-value-icon': 'autocomplete_Select-value-icon_cMUNN'
};

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