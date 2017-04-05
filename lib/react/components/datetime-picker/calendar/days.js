'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _reactOnclickoutside = require('react-onclickoutside');

var _reactOnclickoutside2 = _interopRequireDefault(_reactOnclickoutside);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DateTimePickerDays = function (_PureComponent) {
  _inherits(DateTimePickerDays, _PureComponent);

  function DateTimePickerDays(props) {
    _classCallCheck(this, DateTimePickerDays);

    var _this = _possibleConstructorReturn(this, (DateTimePickerDays.__proto__ || Object.getPrototypeOf(DateTimePickerDays)).call(this, props));

    _this.getDaysOfWeek = _this.getDaysOfWeek.bind(_this);
    _this.renderDays = _this.renderDays.bind(_this);
    _this.updateSelectedDate = _this.updateSelectedDate.bind(_this);
    _this.renderDay = _this.renderDay.bind(_this);
    _this.renderFooter = _this.renderFooter.bind(_this);
    _this.alwaysValidDate = _this.alwaysValidDate.bind(_this);
    _this.handleClickOutside = _this.handleClickOutside.bind(_this);
    return _this;
  }

  /**
   * Get a list of the days of the week
   * depending on the current locale
   * @return {array} A list with the shortname of the days
   */


  _createClass(DateTimePickerDays, [{
    key: 'getDaysOfWeek',
    value: function getDaysOfWeek(locale) {
      var days = locale._weekdaysMin;
      var first = locale.firstDayOfWeek();
      var dow = [];
      var i = 0;

      days.forEach(function (day) {
        dow[(7 + i++ - first) % 7] = day;
      });

      return dow;
    }
  }, {
    key: 'renderDays',
    value: function renderDays() {
      var date = this.props.viewDate;
      var selected = this.props.selectedDate && this.props.selectedDate.clone();
      var prevMonth = date.clone().subtract(1, 'months');
      var currentYear = date.year();
      var currentMonth = date.month();
      var weeks = [];
      var days = [];
      var renderer = this.props.renderDay || this.renderDay;
      var isValid = this.props.isValidDate || this.alwaysValidDate;
      var classes = void 0,
          isDisabled = void 0,
          dayProps = void 0,
          currentDate = void 0;

      // Go to the last week of the previous month
      prevMonth.date(prevMonth.daysInMonth()).startOf('week');
      var lastDay = prevMonth.clone().add(42, 'd');

      while (prevMonth.isBefore(lastDay)) {
        classes = 'rdtDay';
        currentDate = prevMonth.clone();

        if (prevMonth.year() === currentYear && prevMonth.month() < currentMonth || prevMonth.year() < currentYear) classes += ' rdtOld';else if (prevMonth.year() === currentYear && prevMonth.month() > currentMonth || prevMonth.year() > currentYear) classes += ' rdtNew';

        if (selected && prevMonth.isSame(selected, 'day')) classes += ' rdtActive';

        if (prevMonth.isSame((0, _moment2.default)(), 'day')) classes += ' rdtToday';

        isDisabled = !isValid(currentDate, selected);
        if (isDisabled) classes += ' rdtDisabled';

        dayProps = {
          key: prevMonth.format('M_D'),
          'data-value': prevMonth.date(),
          className: classes
        };

        if (!isDisabled) dayProps.onClick = this.updateSelectedDate;

        days.push(renderer(dayProps, currentDate, selected));

        if (days.length === 7) {
          weeks.push(_react2.default.createElement(
            'tr',
            { key: prevMonth.format('M_D') },
            days
          ));
          days = [];
        }

        prevMonth.add(1, 'd');
      }

      return weeks;
    }
  }, {
    key: 'updateSelectedDate',
    value: function updateSelectedDate(event) {
      this.props.updateSelectedDate(event, true);
    }
  }, {
    key: 'renderDay',
    value: function renderDay(props, currentDate) {
      return _react2.default.createElement(
        'td',
        props,
        currentDate.date()
      );
    }
  }, {
    key: 'renderFooter',
    value: function renderFooter() {
      if (!this.props.timeFormat) {
        return '';
      }

      var date = this.props.selectedDate || this.props.viewDate;

      return _react2.default.createElement(
        'tfoot',
        { key: 'tf' },
        _react2.default.createElement(
          'tr',
          null,
          _react2.default.createElement(
            'td',
            { onClick: this.props.showView('time'), colSpan: '7', className: 'rdtTimeToggle' },
            date.format(this.props.timeFormat)
          )
        )
      );
    }
  }, {
    key: 'alwaysValidDate',
    value: function alwaysValidDate() {
      return 1;
    }
  }, {
    key: 'handleClickOutside',
    value: function handleClickOutside() {
      this.props.handleClickOutside();
    }
  }, {
    key: 'render',
    value: function render() {
      var footer = this.renderFooter();
      var date = this.props.viewDate;
      var locale = date.localeData();

      return _react2.default.createElement(
        'div',
        { className: 'rdtDays' },
        _react2.default.createElement(
          'table',
          null,
          _react2.default.createElement(
            'thead',
            { key: 'th' },
            _react2.default.createElement(
              'tr',
              { key: 'h' },
              _react2.default.createElement(
                'th',
                { key: 'p', className: 'rdtPrev' },
                _react2.default.createElement(
                  'span',
                  { onClick: this.props.subtractTime(1, 'months') },
                  '\u2039'
                )
              ),
              _react2.default.createElement(
                'th',
                { key: 's', className: 'rdtSwitch', onClick: this.props.showView('months'), colSpan: '5', 'data-value': this.props.viewDate.month() },
                locale.months(date) + ' ' + date.year()
              ),
              _react2.default.createElement(
                'th',
                { key: 'n', className: 'rdtNext' },
                _react2.default.createElement(
                  'span',
                  { onClick: this.props.addTime(1, 'months') },
                  '\u203A'
                )
              )
            ),
            _react2.default.createElement(
              'tr',
              { key: 'd' },
              this.getDaysOfWeek(locale).map(function (day, index) {
                return _react2.default.createElement(
                  'th',
                  { key: day + index, className: 'dow' },
                  day
                );
              })
            )
          ),
          _react2.default.createElement(
            'tbody',
            { key: 'tb' },
            this.renderDays()
          ),
          footer
        )
      );
    }
  }]);

  return DateTimePickerDays;
}(_react.PureComponent);

exports.default = (0, _reactOnclickoutside2.default)(DateTimePickerDays);