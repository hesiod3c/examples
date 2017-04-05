'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactOnclickoutside = require('react-onclickoutside');

var _reactOnclickoutside2 = _interopRequireDefault(_reactOnclickoutside);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DateTimePickerTime = function (_PureComponent) {
  _inherits(DateTimePickerTime, _PureComponent);

  function DateTimePickerTime(props) {
    _classCallCheck(this, DateTimePickerTime);

    var _this = _possibleConstructorReturn(this, (DateTimePickerTime.__proto__ || Object.getPrototypeOf(DateTimePickerTime)).call(this, props));

    _this.calculateState = _this.calculateState.bind(_this);
    _this.renderCounter = _this.renderCounter.bind(_this);
    _this.renderDayPart = _this.renderDayPart.bind(_this);
    _this.updateMilli = _this.updateMilli.bind(_this);
    _this.renderHeader = _this.renderHeader.bind(_this);
    _this.onStartClicking = _this.onStartClicking.bind(_this);
    _this.toggleDayPart = _this.toggleDayPart.bind(_this);
    _this.increase = _this.increase.bind(_this);
    _this.decrease = _this.decrease.bind(_this);
    _this.pad = _this.pad.bind(_this);
    _this.handleClickOutside = _this.handleClickOutside.bind(_this);

    _this.state = _this.calculateState(_this.props);

    _this.padValues = {
      hours: 1,
      minutes: 2,
      seconds: 2,
      milliseconds: 3
    };
    return _this;
  }

  _createClass(DateTimePickerTime, [{
    key: 'calculateState',
    value: function calculateState(props) {
      var date = props.selectedDate || props.viewDate;
      var format = props.timeFormat;
      var counters = [];

      if (format.toLowerCase().indexOf('h') !== -1) {
        counters.push('hours');
        if (format.indexOf('m') !== -1) {
          counters.push('minutes');
          if (format.indexOf('s') !== -1) {
            counters.push('seconds');
          }
        }
      }

      var daypart = false;
      if (this.state !== null && this.props.timeFormat.toLowerCase().indexOf(' a') !== -1) {
        if (this.props.timeFormat.indexOf(' A') !== -1) {
          daypart = this.state.hours >= 12 ? 'PM' : 'AM';
        } else {
          daypart = this.state.hours >= 12 ? 'pm' : 'am';
        }
      }

      return {
        hours: date.format('H'),
        minutes: date.format('mm'),
        seconds: date.format('ss'),
        milliseconds: date.format('SSS'),
        daypart: daypart,
        counters: counters
      };
    }
  }, {
    key: 'renderCounter',
    value: function renderCounter(type) {
      if (type !== 'daypart') {
        var value = this.state[type];
        if (type === 'hours' && this.props.timeFormat.toLowerCase().indexOf(' a') !== -1) {
          value = (value - 1) % 12 + 1;

          if (value === 0) {
            value = 12;
          }
        }

        return _react2.default.createElement(
          'div',
          { key: type, className: 'rdtCounter' },
          _react2.default.createElement(
            'span',
            { key: 'up', className: 'rdtBtn', onMouseDown: this.onStartClicking('increase', type) },
            '\u25B2'
          ),
          _react2.default.createElement(
            'div',
            { key: 'c', className: 'rdtCount' },
            value
          ),
          _react2.default.createElement(
            'span',
            { key: 'do', className: 'rdtBtn', onMouseDown: this.onStartClicking('decrease', type) },
            '\u25BC'
          )
        );
      }
      return '';
    }
  }, {
    key: 'renderDayPart',
    value: function renderDayPart() {
      return _react2.default.createElement(
        'div',
        { key: 'dayPart', className: 'rdtCounter' },
        _react2.default.createElement(
          'span',
          { key: 'up', className: 'rdtBtn', onMouseDown: this.onStartClicking('toggleDayPart', 'hours') },
          '\u25B2'
        ),
        _react2.default.createElement(
          'div',
          { key: this.state.daypart, className: 'rdtCount' },
          this.state.daypart
        ),
        _react2.default.createElement(
          'span',
          { key: 'do', className: 'rdtBtn', onMouseDown: this.onStartClicking('toggleDayPart', 'hours') },
          '\u25BC'
        )
      );
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      var me = this;
      me.timeConstraints = {
        hours: {
          min: 0,
          max: 23,
          step: 1
        },
        minutes: {
          min: 0,
          max: 59,
          step: 1
        },
        seconds: {
          min: 0,
          max: 59,
          step: 1
        },
        milliseconds: {
          min: 0,
          max: 999,
          step: 1
        }
      };
      ['hours', 'minutes', 'seconds', 'milliseconds'].forEach(function (type) {
        Object.assign(me.timeConstraints[type], me.props.timeConstraints[type]);
      });
      this.setState(this.calculateState(this.props));
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      this.setState(this.calculateState(nextProps));
    }
  }, {
    key: 'updateMilli',
    value: function updateMilli(e) {
      var milli = parseInt(e.target.value, 10);
      if (milli === e.target.value && milli >= 0 && milli < 1000) {
        this.props.setTime('milliseconds', milli);
        this.setState({ milliseconds: milli });
      }
    }
  }, {
    key: 'renderHeader',
    value: function renderHeader() {
      if (!this.props.dateFormat) return null;

      var date = this.props.selectedDate || this.props.viewDate;

      return _react2.default.createElement(
        'thead',
        { key: 'h' },
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'th',
            { className: 'rdtSwitch', colSpan: '4', onClick: this.props.showView('days') },
            date.format(this.props.dateFormat)
          )
        )
      );
    }
  }, {
    key: 'onStartClicking',
    value: function onStartClicking(action, type) {
      var me = this;

      return function () {
        var update = {};
        update[type] = me[action](type);
        me.setState(update);

        me.timer = setTimeout(function () {
          me.increaseTimer = setInterval(function () {
            update[type] = me[action](type);
            me.setState(update);
          }, 70);
        }, 500);

        me.mouseUpListener = function () {
          clearTimeout(me.timer);
          clearInterval(me.increaseTimer);
          me.props.setTime(type, me.state[type]);
          document.body.removeEventListener('mouseup', me.mouseUpListener);
        };

        document.body.addEventListener('mouseup', me.mouseUpListener);
      };
    }
  }, {
    key: 'toggleDayPart',
    value: function toggleDayPart(type) {
      // type is always 'hours'
      var value = parseInt(this.state[type], 10) + 12;
      if (value > this.timeConstraints[type].max) value = this.timeConstraints[type].min + (value - (this.timeConstraints[type].max + 1));
      return this.pad(type, value);
    }
  }, {
    key: 'increase',
    value: function increase(type) {
      var value = parseInt(this.state[type], 10) + this.timeConstraints[type].step;
      if (value > this.timeConstraints[type].max) value = this.timeConstraints[type].min + (value - (this.timeConstraints[type].max + 1));
      return this.pad(type, value);
    }
  }, {
    key: 'decrease',
    value: function decrease(type) {
      var value = parseInt(this.state[type], 10) - this.timeConstraints[type].step;
      if (value < this.timeConstraints[type].min) value = this.timeConstraints[type].max + 1 - (this.timeConstraints[type].min - value);
      return this.pad(type, value);
    }
  }, {
    key: 'pad',
    value: function pad(type, value) {
      var str = value + '';
      while (str.length < this.padValues[type]) {
        str = '0' + str;
      }return str;
    }
  }, {
    key: 'handleClickOutside',
    value: function handleClickOutside() {
      this.props.handleClickOutside();
    }
  }, {
    key: 'render',
    value: function render() {
      var me = this;
      var counters = [];

      this.state.counters.forEach(function (c) {
        if (counters.length) counters.push(_react2.default.createElement(
          'div',
          { key: 'sep' + counters.length, className: 'rdtCounterSeparator' },
          ':'
        ));
        counters.push(me.renderCounter(c));
      });

      if (this.state.daypart !== false) {
        counters.push(me.renderDayPart());
      }

      if (this.state.counters.length === 3 && this.props.timeFormat.indexOf('S') !== -1) {
        counters.push(_react2.default.createElement(
          'div',
          { key: 'sep5', className: 'rdtCounterSeparator' },
          ':'
        ));
        counters.push(_react2.default.createElement(
          'div',
          { key: 'm', className: 'rdtCounter rdtMilli' },
          _react2.default.createElement('input', { type: 'text', value: this.state.milliseconds, onChange: this.updateMilli })
        ));
      }

      return _react2.default.createElement(
        'div',
        { className: 'rdtTime' },
        _react2.default.createElement(
          'table',
          null,
          this.renderHeader(),
          _react2.default.createElement(
            'tbody',
            { key: 'b' },
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'td',
                null,
                _react2.default.createElement(
                  'div',
                  { className: 'rdtCounters' },
                  counters
                )
              )
            )
          )
        )
      );
    }
  }]);

  return DateTimePickerTime;
}(_react.PureComponent);

exports.default = (0, _reactOnclickoutside2.default)(DateTimePickerTime);