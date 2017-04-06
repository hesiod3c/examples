'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _formControl = require('../form-control');

var _formControl2 = _interopRequireDefault(_formControl);

var _svgIcon = require('../svg-icon');

var _svgIcon2 = _interopRequireDefault(_svgIcon);

var _index = require('./calendar/index');

var _index2 = _interopRequireDefault(_index);

var _interface = require('../../interface');

var _interface2 = _interopRequireDefault(_interface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// components

// style


var styles = _interface2.default.styles.datetimePicker;

var nof = function nof() {};

/**
 * DatetimePicker Component
 * @extends {PureComponent }
 * @class
 */

var DatetimePicker = function (_PureComponent) {
  _inherits(DatetimePicker, _PureComponent);

  /**
   * @constructor
   * @param {Object} props
   */
  function DatetimePicker(props) {
    _classCallCheck(this, DatetimePicker);

    var _this = _possibleConstructorReturn(this, (DatetimePicker.__proto__ || Object.getPrototypeOf(DatetimePicker)).call(this, props));

    _this.getStateFromProps = _this.getStateFromProps.bind(_this);
    _this.getUpdateOn = _this.getUpdateOn.bind(_this);
    _this.getFormats = _this.getFormats.bind(_this);
    _this.addTime = _this.addTime.bind(_this);
    _this.updateTime = _this.updateTime.bind(_this);
    _this.subtractTime = _this.subtractTime.bind(_this);
    _this.handleClickOutside = _this.handleClickOutside.bind(_this);
    _this.onInputChange = _this.onInputChange.bind(_this);
    _this.onInputKey = _this.onInputKey.bind(_this);
    _this.showView = _this.showView.bind(_this);
    _this.setTime = _this.setTime.bind(_this);
    _this.updateSelectedDate = _this.updateSelectedDate.bind(_this);
    _this.openCalendar = _this.openCalendar.bind(_this);
    _this.closeCalendar = _this.closeCalendar.bind(_this);
    _this.localMoment = _this.localMoment.bind(_this);
    _this.getComponentProps = _this.getComponentProps.bind(_this);
    _this.setDate = _this.setDate.bind(_this);

    _this.allowedSetTime = ['hours', 'minutes', 'seconds', 'milliseconds'];

    _this.componentProps = {
      fromProps: ['value', 'isValidDate', 'renderDay', 'renderMonth', 'renderYear', 'timeConstraints'],
      fromState: ['viewDate', 'selectedDate', 'updateOn'],
      fromThis: ['setDate', 'setTime', 'showView', 'addTime', 'subtractTime', 'updateSelectedDate', 'localMoment', 'handleClickOutside']
    };

    _this.state = _this.getStateFromProps(_this.props);
    return _this;
  }

  /**
   * propTypes
   * @property {Function} onFocus
   */


  /**
   * defaultProps
   * @property {Function} onFocus
   */


  _createClass(DatetimePicker, [{
    key: 'componentWillMount',


    /**
     * componentWillMount
     */
    value: function componentWillMount() {
      if (this.state.open === undefined) {
        this.setState({
          open: !this.props.input
        });
      }

      this.setState({
        currentView: this.props.dateFormat ? this.props.viewMode || this.state.updateOn || 'days' : 'time'
      });
    }

    /**
     * getStateFromProps
     */

  }, {
    key: 'getStateFromProps',
    value: function getStateFromProps(props) {
      var formats = this.getFormats(props);
      var date = props.value || props.defaultValue;
      var selectedDate = void 0,
          viewDate = void 0,
          updateOn = void 0,
          inputValue = void 0;

      if (date && typeof date === 'string') {
        selectedDate = this.localMoment(date, formats.datetime);
      } else if (date) {
        selectedDate = this.localMoment(date);
      }

      if (selectedDate && !selectedDate.isValid()) {
        selectedDate = null;
      }

      viewDate = selectedDate ? selectedDate.clone().startOf('month') : this.localMoment().startOf('month');
      updateOn = this.getUpdateOn(formats);

      if (selectedDate) {
        inputValue = selectedDate.format(formats.datetime);
      } else if (date.isValid && !date.isValid()) {
        inputValue = '';
      } else {
        inputValue = date || '';
      }

      return {
        updateOn: updateOn,
        inputFormat: formats.datetime,
        viewDate: viewDate,
        selectedDate: selectedDate,
        inputValue: inputValue,
        open: props.open
      };
    }

    /**
     * getUpdateOn
     */

  }, {
    key: 'getUpdateOn',
    value: function getUpdateOn(formats) {
      if (formats.date.match(/[lLD]/)) {
        return 'days';
      } else if (formats.date.indexOf('M') !== -1) {
        return 'months';
      } else if (formats.date.indexOf('Y') !== -1) {
        return 'years';
      }

      return 'days';
    }

    /**
     * getFormats
     */

  }, {
    key: 'getFormats',
    value: function getFormats(props) {
      var formats = {
        date: props.dateFormat || '',
        time: props.timeFormat || ''
      };
      var locale = this.localMoment(props.date, null, props).localeData();

      if (formats.date === true) {
        formats.date = locale.longDateFormat('L');
      } else if (this.getUpdateOn(formats) !== 'days') {
        formats.time = '';
      }

      if (formats.time === true) {
        formats.time = locale.longDateFormat('LT');
      }

      formats.datetime = formats.date && formats.time ? formats.date + ' ' + formats.time : formats.date || formats.time;

      return formats;
    }

    /**
     * componentWillReceiveProps
     */

  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var formats = this.getFormats(nextProps);
      var updatedState = {};

      if (nextProps.value !== this.props.value || formats.datetime !== this.getFormats(this.props).datetime) {
        updatedState = this.getStateFromProps(nextProps);
      }

      if (updatedState.open === undefined) {
        if (this.props.closeOnSelect && this.state.currentView !== 'time') {
          updatedState.open = false;
        } else {
          updatedState.open = this.state.open;
        }
      }

      if (nextProps.viewMode !== this.props.viewMode) {
        updatedState.currentView = nextProps.viewMode;
      }

      if (nextProps.locale !== this.props.locale) {
        if (this.state.viewDate) {
          var updatedViewDate = this.state.viewDate.clone().locale(nextProps.locale);
          updatedState.viewDate = updatedViewDate;
        }
        if (this.state.selectedDate) {
          var updatedSelectedDate = this.state.selectedDate.clone().locale(nextProps.locale);
          updatedState.selectedDate = updatedSelectedDate;
          updatedState.inputValue = updatedSelectedDate.format(formats.datetime);
        }
      }

      if (nextProps.utc !== this.props.utc) {
        if (nextProps.utc) {
          if (this.state.viewDate) updatedState.viewDate = this.state.viewDate.clone().utc();
          if (this.state.selectedDate) {
            updatedState.selectedDate = this.state.selectedDate.clone().utc();
            updatedState.inputValue = updatedState.selectedDate.format(formats.datetime);
          }
        } else {
          if (this.state.viewDate) updatedState.viewDate = this.state.viewDate.clone().local();
          if (this.state.selectedDate) {
            updatedState.selectedDate = this.state.selectedDate.clone().local();
            updatedState.inputValue = updatedState.selectedDate.format(formats.datetime);
          }
        }
      }

      this.setState(updatedState);
    }

    /**
     * onInputChange
     */

  }, {
    key: 'onInputChange',
    value: function onInputChange(e) {
      var value = e.target === null ? e : e.target.value;
      var localMoment = this.localMoment(value, this.state.inputFormat);
      var update = { inputValue: value };

      if (localMoment.isValid() && !this.props.value) {
        update.selectedDate = localMoment;
        update.viewDate = localMoment.clone().startOf('month');
      } else {
        update.selectedDate = null;
      }

      return this.setState(update, function () {
        return this.props.onChange(localMoment.isValid() ? localMoment : this.state.inputValue);
      });
    }

    /**
     * onInputKey
     */

  }, {
    key: 'onInputKey',
    value: function onInputKey(e) {
      if (e.which === 9 && this.props.closeOnTab) {
        this.closeCalendar();
      }
    }

    /**
     * showView
     */

  }, {
    key: 'showView',
    value: function showView(view) {
      var me = this;
      return function () {
        me.setState({ currentView: view });
      };
    }

    /**
     * setDate
     */

  }, {
    key: 'setDate',
    value: function setDate(type) {
      var _this2 = this;

      var nextViews = {
        month: 'days',
        year: 'months'
      };

      return function (e) {
        _this2.setState({
          viewDate: _this2.state.viewDate.clone()[type](parseInt(e.target.getAttribute('data-value'), 10)).startOf(type),
          currentView: nextViews[type]
        });
      };
    }

    /**
     * addTime
     */

  }, {
    key: 'addTime',
    value: function addTime(amount, type, toSelected) {
      return this.updateTime('add', amount, type, toSelected);
    }

    /**
     * subtractTime
     */

  }, {
    key: 'subtractTime',
    value: function subtractTime(amount, type, toSelected) {
      return this.updateTime('subtract', amount, type, toSelected);
    }

    /**
     * updateTime
     */

  }, {
    key: 'updateTime',
    value: function updateTime(op, amount, type, toSelected) {
      var me = this;

      return function () {
        var update = {},
            date = toSelected ? 'selectedDate' : 'viewDate';

        update[date] = me.state[date].clone()[op](amount, type);

        me.setState(update);
      };
    }

    /**
     * setTime
     */

  }, {
    key: 'setTime',
    value: function setTime(type, value) {
      var index = this.allowedSetTime.indexOf(type) + 1;
      var state = this.state;
      var date = (state.selectedDate || state.viewDate).clone();
      var nextType = void 0;

      // It is needed to set all the time properties
      // to not to reset the time
      date[type](value);
      for (; index < this.allowedSetTime.length; index++) {
        nextType = this.allowedSetTime[index];
        date[nextType](date[nextType]());
      }

      if (!this.props.value) {
        this.setState({
          selectedDate: date,
          inputValue: date.format(state.inputFormat)
        });
      }
      this.props.onChange(date);
    }

    /**
     * updateSelectedDate
     */

  }, {
    key: 'updateSelectedDate',
    value: function updateSelectedDate(e, close) {
      var target = e.target;
      var modifier = 0;
      var viewDate = this.state.viewDate;
      var currentDate = this.state.selectedDate || viewDate;
      var date = void 0;

      if (target.className.indexOf('rdtDay') !== -1) {
        if (target.className.indexOf('rdtNew') !== -1) modifier = 1;else if (target.className.indexOf('rdtOld') !== -1) modifier = -1;

        date = viewDate.clone().month(viewDate.month() + modifier).date(parseInt(target.getAttribute('data-value'), 10));
      } else if (target.className.indexOf('rdtMonth') !== -1) {
        date = viewDate.clone().month(parseInt(target.getAttribute('data-value'), 10)).date(currentDate.date());
      } else if (target.className.indexOf('rdtYear') !== -1) {
        date = viewDate.clone().month(currentDate.month()).date(currentDate.date()).year(parseInt(target.getAttribute('data-value'), 10));
      }

      date.hours(currentDate.hours()).minutes(currentDate.minutes()).seconds(currentDate.seconds()).milliseconds(currentDate.milliseconds());

      if (!this.props.value) {
        var open = !(this.props.closeOnSelect && close);
        if (!open) {
          this.props.onBlur(date);
        }

        this.setState({
          selectedDate: date,
          viewDate: date.clone().startOf('month'),
          inputValue: date.format(this.state.inputFormat),
          open: open
        });
      } else {
        if (this.props.closeOnSelect && close) {
          this.closeCalendar();
        }
      }

      this.props.onChange(date);
    }

    /**
     * openCalendar
     */

  }, {
    key: 'openCalendar',
    value: function openCalendar() {
      if (!this.state.open) {
        this.setState({ open: true }, function () {
          this.props.onFocus();
        });
      }
    }

    /**
     * closeCalendar
     */

  }, {
    key: 'closeCalendar',
    value: function closeCalendar() {
      this.setState({ open: false }, function () {
        this.props.onBlur(this.state.selectedDate || this.state.inputValue);
      });
    }

    /**
     * handleClickOutside
     */

  }, {
    key: 'handleClickOutside',
    value: function handleClickOutside() {
      if (this.props.input && this.state.open && !this.props.open) {
        this.setState({ open: false }, function () {
          this.props.onBlur(this.state.selectedDate || this.state.inputValue);
        });
      }
    }

    /**
     * localMoment
     */

  }, {
    key: 'localMoment',
    value: function localMoment(date, format, props) {
      props = props || this.props;
      var momentFn = props.utc ? _moment2.default.utc : _moment2.default;
      var m = momentFn(date, format, props.strictParsing);
      if (props.locale) m.locale(props.locale);
      return m;
    }

    /**
     * getComponentProps
     */

  }, {
    key: 'getComponentProps',
    value: function getComponentProps() {
      var me = this;
      var formats = this.getFormats(this.props);
      var props = { dateFormat: formats.date, timeFormat: formats.time };

      this.componentProps.fromProps.forEach(function (name) {
        props[name] = me.props[name];
      });
      this.componentProps.fromState.forEach(function (name) {
        props[name] = me.state[name];
      });
      this.componentProps.fromThis.forEach(function (name) {
        props[name] = me[name];
      });

      return props;
    }

    /**
     * render
     * @return {ReactElement} markup
     */

  }, {
    key: 'render',
    value: function render() {
      var className = 'rdt' + (this.props.className ? Array.isArray(this.props.className) ? ' ' + this.props.className.join(' ') : ' ' + this.props.className : '');

      if (!this.props.input) {
        className += ' rdtStatic';
      }

      if (this.state.open) {
        className += ' rdtOpen';
      }

      var viewProps = this.getComponentProps();

      return _react2.default.createElement(
        'div',
        { className: className },
        this.props.input && _react2.default.createElement(_formControl2.default, _extends({}, this.props.inputProps, {
          addonBefore: _react2.default.createElement(_svgIcon2.default, { name: 'calendar' }),
          key: 'i',
          type: 'text',
          className: styles['form-control'],
          onFocus: this.openCalendar,
          onChange: this.onInputChange,
          onKeyDown: this.onInputKey,
          value: this.state.inputValue,
          placeholder: this.props.placeholder
        })),
        _react2.default.createElement(
          'div',
          { key: 'dt', className: 'rdtPicker' },
          _react2.default.createElement(_index2.default, _extends({}, viewProps, {
            view: this.state.currentView,
            onClickOutside: this.handleClickOutside
          }))
        )
      );
    }
  }]);

  return DatetimePicker;
}(_react.PureComponent);

DatetimePicker.propTypes = {
  onFocus: _react.PropTypes.func,
  onBlur: _react.PropTypes.func,
  onChange: _react.PropTypes.func,
  locale: _react.PropTypes.string,
  utc: _react.PropTypes.bool,
  input: _react.PropTypes.bool,
  inputProps: _react.PropTypes.object,
  timeConstraints: _react.PropTypes.object,
  viewMode: _react.PropTypes.oneOf(['years', 'months', 'days', 'time']),
  isValidDate: _react.PropTypes.func,
  open: _react.PropTypes.bool,
  strictParsing: _react.PropTypes.bool,
  closeOnSelect: _react.PropTypes.bool,
  closeOnTab: _react.PropTypes.bool
};
DatetimePicker.defaultProps = {
  onFocus: nof,
  onBlur: nof,
  onChange: nof,
  className: '',
  defaultValue: '',
  inputProps: {},
  input: true,
  timeFormat: true,
  timeConstraints: {},
  dateFormat: true,
  strictParsing: true,
  closeOnSelect: false,
  closeOnTab: true,
  utc: false
};


DatetimePicker.moment = _moment2.default;

/**
 * @example <DatetimePicker />
 */
exports.default = (0, _reactCssModules2.default)(DatetimePicker, styles);