'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _days = require('./days');

var _days2 = _interopRequireDefault(_days);

var _months = require('./months');

var _months2 = _interopRequireDefault(_months);

var _years = require('./years');

var _years2 = _interopRequireDefault(_years);

var _time = require('./time');

var _time2 = _interopRequireDefault(_time);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * CalendarContainer component
 * @extends {PureComponent }
 * @class
 */
var CalendarContainer = function (_PureComponent) {
  _inherits(CalendarContainer, _PureComponent);

  /**
   * @constructor
   * @param {Object} props
   */
  function CalendarContainer(props) {
    _classCallCheck(this, CalendarContainer);

    var _this = _possibleConstructorReturn(this, (CalendarContainer.__proto__ || Object.getPrototypeOf(CalendarContainer)).call(this, props));

    _this.viewComponents = {
      days: _days2.default,
      months: _months2.default,
      years: _years2.default,
      time: _time2.default
    };
    return _this;
  }

  /**
   * defaultProps
   * @property {String} view
   */


  /**
   * propTypes
   * @property {String} view
   */


  _createClass(CalendarContainer, [{
    key: 'render',


    /**
     * render
     * @return {ReactElement} markup
     */
    value: function render() {
      var _props = this.props,
          view = _props.view,
          viewProps = _objectWithoutProperties(_props, ['view']);

      var Component = this.viewComponents[view];

      return _react2.default.createElement(Component, viewProps);
    }
  }]);

  return CalendarContainer;
}(_react.PureComponent);

CalendarContainer.defaultProps = {
  view: 'days'
};
CalendarContainer.propTypes = {
  view: _react.PropTypes.string
};
exports.default = CalendarContainer;