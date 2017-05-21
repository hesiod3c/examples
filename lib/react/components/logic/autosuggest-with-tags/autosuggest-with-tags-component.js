'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _formGroup = require('../../theme/form-group');

var _formGroup2 = _interopRequireDefault(_formGroup);

var _formControl = require('../../theme/form-control');

var _formControl2 = _interopRequireDefault(_formControl);

var _tag = require('../../theme/tag');

var _tag2 = _interopRequireDefault(_tag);

var _button = require('../../theme/button');

var _button2 = _interopRequireDefault(_button);

var _icon = require('../../theme/icon');

var _icon2 = _interopRequireDefault(_icon);

var _suggestions = require('../../theme/suggestions');

var _suggestions2 = _interopRequireDefault(_suggestions);

var _interface = require('../../../interface');

var _interface2 = _interopRequireDefault(_interface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// components

// style


var styles = _interface2.default.styles.autosuggestWithTags;

/**
 * AutosuggestWithTags Component
 * @extends {PureComponent }
 * @class
 */

var AutosuggestWithTags = function (_PureComponent) {
  _inherits(AutosuggestWithTags, _PureComponent);

  /**
   * @constructor
   * @param {Object} props
   */
  function AutosuggestWithTags(props) {
    _classCallCheck(this, AutosuggestWithTags);

    var _this = _possibleConstructorReturn(this, (AutosuggestWithTags.__proto__ || Object.getPrototypeOf(AutosuggestWithTags)).call(this, props));

    _this.onAdd = _this.onAdd.bind(_this);
    _this.onRemove = _this.onRemove.bind(_this);
    _this.onInputChange = _this.onInputChange.bind(_this);
    _this.onInputKeyDown = _this.onInputKeyDown.bind(_this);
    _this.onCreate = _this.onCreate.bind(_this);
    return _this;
  }

  /**
   * defaultProps
   * @property {Array} items
   */


  /**
   * propTypes
   * @property {Array} items
   */


  _createClass(AutosuggestWithTags, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.onGetItems(this.props.tags);
    }
  }, {
    key: 'onAdd',
    value: function onAdd(item) {
      this.props.onAddItem(item);
    }
  }, {
    key: 'onRemove',
    value: function onRemove(item) {
      this.props.onRemoveItem(item);
    }
  }, {
    key: 'onInputChange',
    value: function onInputChange(event) {
      var value = event.target.value;

      this.props.onGetField(value);
    }
  }, {
    key: 'onInputKeyDown',
    value: function onInputKeyDown(event) {
      var ENTER = event.keyCode === 13;
      var TAB = event.keyCode === 9;

      if (ENTER || TAB) {
        this.onCreate();
      }
    }
  }, {
    key: 'onCreate',
    value: function onCreate() {
      var _ref = this.props[this.props.reducerName] || { item: '' },
          item = _ref.item;

      if (item !== '') {
        var created = {
          id: item,
          name: item
        };
        this.props.onAddItem(created);
      }
    }

    /**
     * render
     * @return {ReactElement} markup
     */

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          name = _props.name,
          placeholder = _props.placeholder,
          validationState = _props.validationState,
          reducerName = _props.reducerName,
          options = _props.options;

      var _ref2 = this.props[reducerName] || { items: [], item: '' },
          items = _ref2.items,
          item = _ref2.item;

      var keyDown = !options ? this.onInputKeyDown : undefined;

      return _react2.default.createElement(
        'div',
        { className: styles['autoSuggestWithTags'] },
        _react2.default.createElement(
          _formGroup2.default,
          {
            validationState: validationState,
            className: (0, _classnames2.default)(styles['autoSuggestWithTags-formGroup'], _defineProperty({}, styles['autoSuggestWithTags-itemWithButton'], !options))
          },
          _react2.default.createElement(_formControl2.default, {
            className: styles['autoSuggestWithTags-formControl'],
            placeholder: placeholder,
            onChange: this.onInputChange,
            onKeyDown: keyDown,
            name: name,
            value: item
          }),
          !options && _react2.default.createElement(
            _button2.default,
            {
              className: styles['autoSuggestWithTags-itemWithButton-button'],
              style: 'primary',
              onClick: this.onCreate
            },
            _react2.default.createElement(_icon2.default, { name: 'plus', size: '20px' })
          ),
          options && _react2.default.createElement(_suggestions2.default, {
            listboxId: 'reactTags-listbox',
            expandable: item.length >= 3,
            suggestions: options,
            query: item,
            addTag: this.onAdd,
            maxSuggestionsLength: 6 })
        ),
        items.map(function (item, index) {
          return _react2.default.createElement(
            _tag2.default,
            { key: index, className: styles['autoSuggestWithTags-tag'], onRemove: _this2.onRemove.bind(_this2, item) },
            item.name
          );
        })
      );
    }
  }]);

  return AutosuggestWithTags;
}(_react.PureComponent);

/**
 * @example <AutosuggestWithTags />
 */


AutosuggestWithTags.defaultProps = {
  tags: [],
  reducerName: 'list',
  placeholder: undefined,
  validationState: undefined,
  onChange: function onChange() {}
};
AutosuggestWithTags.propTypes = {
  tags: _propTypes2.default.array,
  reducerName: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  validationState: _propTypes2.default.string,
  onChange: _propTypes2.default.func
};
exports.default = (0, _reactCssModules2.default)(AutosuggestWithTags, styles);