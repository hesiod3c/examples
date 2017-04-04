'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// styles
var styles = {
  'suggestions': 'suggestions_suggestions_1Ayl5',
  'suggestions-list': 'suggestions_suggestions-list_UzKQ_',
  'is-active': 'suggestions_is-active_3UV60',
  'is-disabled': 'suggestions_is-disabled_I4XPQ'
};


function markIt(input, query) {
  var escaped = query.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');
  var regex = RegExp(escaped, 'gi');

  return {
    __html: input.replace(regex, '<mark>$&</mark>')
  };
}

function filterSuggestions(query, suggestions, length) {
  var regex = new RegExp('\\b' + query, 'i');
  return suggestions.filter(function (item) {
    return regex.test(item.name);
  }).slice(0, length);
}

/**
 * Suggestions component
 * @extends {PureComponent }
 * @class
 */

var Suggestions = function (_PureComponent) {
  _inherits(Suggestions, _PureComponent);

  /**
   * @constructor
   * @param {Object} props
   */
  function Suggestions(props) {
    _classCallCheck(this, Suggestions);

    var _this = _possibleConstructorReturn(this, (Suggestions.__proto__ || Object.getPrototypeOf(Suggestions)).call(this, props));

    _this.state = {
      options: filterSuggestions(_this.props.query, _this.props.suggestions, _this.props.maxSuggestionsLength)
    };

    _this._generateOptions = _this._generateOptions.bind(_this);
    return _this;
  }

  /**
   * defaultProps
   * @property {Boolean} children
   */


  /**
   * propTypes
   * @property {Array} options
   */


  _createClass(Suggestions, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(newProps) {
      this.setState({
        options: filterSuggestions(newProps.query, newProps.suggestions, newProps.maxSuggestionsLength)
      });
    }

    /**
     * _generateOptions
     */

  }, {
    key: '_generateOptions',
    value: function _generateOptions(item, index) {
      var _classNames,
          _this2 = this;

      var key = this.props.listboxId + '-' + index;

      var fullClass = (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, styles['is-active'], this.props.selectedIndex === index), _defineProperty(_classNames, styles['is-disabled'], item.disabled), _classNames));

      return _react2.default.createElement(
        'li',
        {
          id: key,
          key: key,
          role: 'option',
          className: fullClass,
          'aria-disabled': item.disabled === true,
          onMouseDown: function onMouseDown() {
            return _this2.props.addTag(item);
          } },
        _react2.default.createElement('span', { dangerouslySetInnerHTML: markIt(item.name, this.props.query) })
      );
    }

    /**
     * render
     * @return {ReactElement} markup
     */

  }, {
    key: 'render',
    value: function render() {
      var expandable = this.props.expandable;


      if (!expandable || !this.state.options.length) {
        return null;
      }

      var items = this.state.options.map(this._generateOptions);

      return _react2.default.createElement(
        'div',
        { className: styles.suggestions },
        _react2.default.createElement(
          'ul',
          { className: styles['suggestions-list'], role: 'listbox', id: this.props.listboxId },
          items
        )
      );
    }
  }]);

  return Suggestions;
}(_react.PureComponent);

/**
 * @example <Suggestions />
 */


Suggestions.defaultProps = {
  suggestions: []
};
Suggestions.propTypes = {
  suggestions: _react.PropTypes.array.isRequired
};
exports.default = (0, _reactCssModules2.default)(Suggestions, styles);