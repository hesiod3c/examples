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

var capitalize = function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * DateTimePickerMonths component
 * @extends {PureComponent }
 * @class
 */

var DateTimePickerMonths = function (_PureComponent) {
  _inherits(DateTimePickerMonths, _PureComponent);

  /**
   * @constructor
   * @param {Object} props
   */
  function DateTimePickerMonths(props) {
    _classCallCheck(this, DateTimePickerMonths);

    var _this = _possibleConstructorReturn(this, (DateTimePickerMonths.__proto__ || Object.getPrototypeOf(DateTimePickerMonths)).call(this, props));

    _this.renderMonths = _this.renderMonths.bind(_this);
    _this.updateSelectedMonth = _this.updateSelectedMonth.bind(_this);
    _this.renderMonth = _this.renderMonth.bind(_this);
    _this.alwaysValidDate = _this.alwaysValidDate.bind(_this);
    _this.handleClickOutside = _this.handleClickOutside.bind(_this);
    return _this;
  }

  /**
   * renderMonths
   */


  _createClass(DateTimePickerMonths, [{
    key: 'renderMonths',
    value: function renderMonths() {
      var date = this.props.selectedDate;
      var month = this.props.viewDate.month();
      var year = this.props.viewDate.year();
      var rows = [];
      var i = 0;
      var months = [];
      var renderer = this.props.renderMonth || this.renderMonth;
      var isValid = this.props.isValidDate || this.alwaysValidDate;
      var classes = void 0;
      var props = void 0;
      var currentMonth = void 0;
      var isDisabled = void 0;
      var noOfDaysInMonth = void 0;
      var daysInMonth = void 0;
      var validDay = void 0;
      // Date is irrelevant because we're only interested in month
      var irrelevantDate = 1;

      while (i < 12) {
        classes = 'rdtMonth';
        currentMonth = this.props.viewDate.clone().set({ year: year, month: i, date: irrelevantDate });

        noOfDaysInMonth = currentMonth.endOf('month').format('D');
        daysInMonth = Array.from({ length: noOfDaysInMonth }, function (e, i) {
          return i + 1;
        });

        validDay = daysInMonth.find(function (d) {
          var day = currentMonth.clone().set('date', d);
          return isValid(day);
        });

        isDisabled = validDay === undefined;

        if (isDisabled) classes += ' rdtDisabled';

        if (date && i === month && year === date.year()) classes += ' rdtActive';

        props = {
          key: i,
          'data-value': i,
          className: classes
        };

        if (!isDisabled) {
          props.onClick = this.props.updateOn === 'months' ? this.updateSelectedMonth : this.props.setDate('month');
        }

        months.push(renderer(props, i, year, date && date.clone()));

        if (months.length === 4) {
          rows.push(_react2.default.createElement(
            'tr',
            { key: month + '_' + rows.length },
            months
          ));
          months = [];
        }

        i++;
      }

      return rows;
    }

    /**
     * updateSelectedMonth
     * @param {EventListener} event
     */

  }, {
    key: 'updateSelectedMonth',
    value: function updateSelectedMonth(event) {
      this.props.updateSelectedDate(event);
    }

    /**
     * updateSelectedDate
     * @param {Object} props
     * @param {String} month
     */

  }, {
    key: 'renderMonth',
    value: function renderMonth(props, month) {
      var localMoment = this.props.viewDate;
      var monthStr = localMoment.localeData().monthsShort(localMoment.month(month));
      var strLength = 3;
      // Because some months are up to 5 characters long, we want to
      // use a fixed string length for consistency
      var monthStrFixedLength = monthStr.substring(0, strLength);

      return _react2.default.createElement(
        'td',
        props,
        capitalize(monthStrFixedLength)
      );
    }

    /**
     * alwaysValidDate
     */

  }, {
    key: 'alwaysValidDate',
    value: function alwaysValidDate() {
      return 1;
    }

    /**
     * handleClickOutside
     */

  }, {
    key: 'handleClickOutside',
    value: function handleClickOutside() {
      this.props.handleClickOutside();
    }

    /**
     * render
     * @return {ReactElement} markup
     */

  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'rdtMonths' },
        _react2.default.createElement(
          'table',
          { key: 'a' },
          _react2.default.createElement(
            'thead',
            null,
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                { key: 'prev', className: 'rdtPrev' },
                _react2.default.createElement(
                  'span',
                  { onClick: this.props.subtractTime(1, 'years') },
                  '\u2039'
                )
              ),
              _react2.default.createElement(
                'th',
                { key: 'year', className: 'rdtSwitch', onClick: this.props.showView('years'), colSpan: '2', 'data-value': this.props.viewDate.year() },
                this.props.viewDate.year()
              ),
              _react2.default.createElement(
                'th',
                { key: 'next', className: 'rdtNext' },
                _react2.default.createElement(
                  'span',
                  { onClick: this.props.addTime(1, 'years') },
                  '\u203A'
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'table',
          { key: 'months' },
          _react2.default.createElement(
            'tbody',
            { key: 'b' },
            this.renderMonths()
          )
        )
      );
    }
  }]);

  return DateTimePickerMonths;
}(_react.PureComponent);

exports.default = (0, _reactOnclickoutside2.default)(DateTimePickerMonths);