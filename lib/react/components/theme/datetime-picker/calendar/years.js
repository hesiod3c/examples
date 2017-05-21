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

/**
 * DateTimePickerYears component
 * @extends {PureComponent }
 * @class
 */
var DateTimePickerYears = function (_PureComponent) {
  _inherits(DateTimePickerYears, _PureComponent);

  /**
   * @constructor
   * @param {Object} props
   */
  function DateTimePickerYears(props) {
    _classCallCheck(this, DateTimePickerYears);

    var _this = _possibleConstructorReturn(this, (DateTimePickerYears.__proto__ || Object.getPrototypeOf(DateTimePickerYears)).call(this, props));

    _this.renderYears = _this.renderYears.bind(_this);
    _this.updateSelectedYear = _this.updateSelectedYear.bind(_this);
    _this.renderYear = _this.renderYear.bind(_this);
    _this.alwaysValidDate = _this.alwaysValidDate.bind(_this);
    _this.handleClickOutside = _this.handleClickOutside.bind(_this);
    return _this;
  }

  /**
   * renderYears
   * @param {Number} year
   */


  _createClass(DateTimePickerYears, [{
    key: 'renderYears',
    value: function renderYears(year) {
      var years = [];
      var i = -1;
      var rows = [];
      var renderer = this.props.renderYear || this.renderYear;
      var selectedDate = this.props.selectedDate;
      var isValid = this.props.isValidDate || this.alwaysValidDate;
      var classes = void 0;
      var props = void 0;
      var currentYear = void 0;
      var isDisabled = void 0;
      var noOfDaysInYear = void 0;
      var daysInYear = void 0;
      var validDay = void 0;
      // Month and date are irrelevant here because
      // we're only interested in the year
      var irrelevantMonth = 0;
      var irrelevantDate = 1;

      year--;
      while (i < 11) {
        classes = 'rdtYear';
        currentYear = this.props.viewDate.clone().set({ year: year, month: irrelevantMonth, date: irrelevantDate });

        // Not sure what 'rdtOld' is for, commenting out for now as it's not working properly
        // if ( i === -1 | i === 10 )
        // classes += ' rdtOld';

        noOfDaysInYear = currentYear.endOf('year').format('DDD');
        daysInYear = Array.from({ length: noOfDaysInYear }, function (e, i) {
          return i + 1;
        });

        validDay = daysInYear.find(function (d) {
          var day = currentYear.clone().dayOfYear(d);
          return isValid(day);
        });

        isDisabled = validDay === undefined;

        if (isDisabled) classes += ' rdtDisabled';

        if (selectedDate && selectedDate.year() === year) classes += ' rdtActive';

        props = {
          key: year,
          'data-value': year,
          className: classes
        };

        if (!isDisabled) {
          props.onClick = this.props.updateOn === 'years' ? this.updateSelectedYear : this.props.setDate('year');
        }
        years.push(renderer(props, year, selectedDate && selectedDate.clone()));

        if (years.length === 4) {
          rows.push(_react2.default.createElement(
            'tr',
            { key: i },
            years
          ));
          years = [];
        }

        year++;
        i++;
      }

      return rows;
    }

    /**
     * updateSelectedYear
     * @param {EventListener} event
     */

  }, {
    key: 'updateSelectedYear',
    value: function updateSelectedYear(event) {
      this.props.updateSelectedDate(event);
    }

    /**
     * renderYear
     * @param {Object} props
     * @param {String} year
     */

  }, {
    key: 'renderYear',
    value: function renderYear(props, year) {
      return _react2.default.createElement(
        'td',
        props,
        year
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
      var year = parseInt(this.props.viewDate.year() / 10, 10) * 10;

      return _react2.default.createElement(
        'div',
        { className: 'rdtYears' },
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
                  { onClick: this.props.subtractTime(10, 'years') },
                  '\u2039'
                )
              ),
              _react2.default.createElement(
                'th',
                { key: 'year', className: 'rdtSwitch', onClick: this.props.showView('years'), colSpan: '2' },
                year + '-' + (year + 9)
              ),
              _react2.default.createElement(
                'th',
                { key: 'next', className: 'rdtNext' },
                _react2.default.createElement(
                  'span',
                  { onClick: this.props.addTime(10, 'years') },
                  '\u203A'
                )
              )
            )
          )
        ),
        _react2.default.createElement(
          'table',
          { key: 'years' },
          _react2.default.createElement(
            'tbody',
            null,
            this.renderYears(year)
          )
        )
      );
    }
  }]);

  return DateTimePickerYears;
}(_react.PureComponent);

exports.default = (0, _reactOnclickoutside2.default)(DateTimePickerYears);