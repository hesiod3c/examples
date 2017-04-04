'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _reactDatetime = require('react-datetime');

var _reactDatetime2 = _interopRequireDefault(_reactDatetime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// component


// style
var styles = {
  'form-control': 'datetime-picker_form-control_1aVq4',
  'rdt': 'datetime-picker_rdt_tCeZT',
  'rdtPicker': 'datetime-picker_rdtPicker_2NIlY',
  'rdtTimeToggle': 'datetime-picker_rdtTimeToggle_1QWiK',
  'rdtOld': 'datetime-picker_rdtOld_1oP9F',
  'rdtNew': 'datetime-picker_rdtNew_1xVpY',
  'rdtToday': 'datetime-picker_rdtToday_221rb',
  'rdtActive': 'datetime-picker_rdtActive_1foiO',
  'rdtDisabled': 'datetime-picker_rdtDisabled_6BVbg',
  'rdtDay': 'datetime-picker_rdtDay_LYSW1',
  'rdtHour': 'datetime-picker_rdtHour_P6iMK',
  'rdtMinute': 'datetime-picker_rdtMinute_wLq35',
  'rdtSecond': 'datetime-picker_rdtSecond_1ymuW',
  'rdtSwitch': 'datetime-picker_rdtSwitch_20tQR',
  'rdtNext': 'datetime-picker_rdtNext_3EgjI',
  'rdtPrev': 'datetime-picker_rdtPrev_rNkHe',
  'dow': 'datetime-picker_dow_3f9qY',
  'rdtOpen': 'datetime-picker_rdtOpen_3VWyX',
  'rdtStatic': 'datetime-picker_rdtStatic_3PXGY',
  'rdtMonth': 'datetime-picker_rdtMonth_2BVnS',
  'rdtYear': 'datetime-picker_rdtYear_2Cf7X',
  'rdtCounters': 'datetime-picker_rdtCounters_1Maoo',
  'rdtCounterSeparator': 'datetime-picker_rdtCounterSeparator_3qdyS',
  'rdtCounter': 'datetime-picker_rdtCounter_12Csw',
  'rdtBtn': 'datetime-picker_rdtBtn_3YTgp',
  'rdtCount': 'datetime-picker_rdtCount_2fxYV',
  'rdtMilli': 'datetime-picker_rdtMilli_fjgM9'
};

/**
 * DatetimePicker component
 * @class
 */

var DatetimePicker = function (_Component) {
  _inherits(DatetimePicker, _Component);

  function DatetimePicker() {
    _classCallCheck(this, DatetimePicker);

    return _possibleConstructorReturn(this, (DatetimePicker.__proto__ || Object.getPrototypeOf(DatetimePicker)).apply(this, arguments));
  }

  _createClass(DatetimePicker, [{
    key: 'render',

    /**
     * render
     * @return {ReactElement} markup
     */
    value: function render() {
      var _props = this.props,
          onChange = _props.onChange,
          name = _props.name;

      return _react2.default.createElement(_reactDatetime2.default, {
        dateFormat: 'DD/MM/YYYY',
        timeFormat: 'H:mm',
        locale: 'pt-br',
        onChange: onChange,
        name: name
      });
    }
  }]);

  return DatetimePicker;
}(_react.Component);

/**
 * @example <DatetimePicker />
 */


exports.default = (0, _reactCssModules2.default)(DatetimePicker, styles);