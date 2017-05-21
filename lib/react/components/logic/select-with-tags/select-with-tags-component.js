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

var _formGroup = require('../../theme/form-group');

var _formGroup2 = _interopRequireDefault(_formGroup);

var _formControl = require('../../theme/form-control');

var _formControl2 = _interopRequireDefault(_formControl);

var _tag = require('../../theme/tag');

var _tag2 = _interopRequireDefault(_tag);

var _interface = require('../../../interface');

var _interface2 = _interopRequireDefault(_interface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// components

//styles


var styles = _interface2.default.styles.selectWithTags;

/**
 * SelectWithTags Component
 * @extends {PureComponent }
 * @class
 */

var SelectWithTags = function (_PureComponent) {
  _inherits(SelectWithTags, _PureComponent);

  /**
   * @constructor
   * @param {Object} props
   */
  function SelectWithTags(props) {
    _classCallCheck(this, SelectWithTags);

    var _this = _possibleConstructorReturn(this, (SelectWithTags.__proto__ || Object.getPrototypeOf(SelectWithTags)).call(this, props));

    _this.onAdd = _this.onAdd.bind(_this);
    _this.onRemove = _this.onRemove.bind(_this);
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


  _createClass(SelectWithTags, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.onGetItems(this.props.tags);
    }
  }, {
    key: 'onAdd',
    value: function onAdd(event) {
      var value = event.target.value;

      if (value !== '') {
        var id = event.nativeEvent.target.selectedIndex;
        var label = event.nativeEvent.target[id].text;
        this.props.onAddItem({ label: label, value: value });
      }
    }
  }, {
    key: 'onRemove',
    value: function onRemove(item) {
      this.props.onRemoveItem(item);
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

      var _ref = this.props[reducerName] || { items: [], item: '' },
          items = _ref.items,
          item = _ref.item;

      return _react2.default.createElement(
        'div',
        { className: styles['selectWithTags'] },
        _react2.default.createElement(
          _formGroup2.default,
          {
            validationState: validationState,
            className: styles['selectWithTags-formGroup']
          },
          _react2.default.createElement(
            _formControl2.default,
            {
              type: 'select',
              className: styles['selectWithTags-formControl'],
              placeholder: placeholder,
              onChange: this.onAdd,
              name: name,
              value: item
            },
            options.map(function (item) {
              return _react2.default.createElement(
                'option',
                { value: item.value },
                item.label
              );
            })
          )
        ),
        items.map(function (item, index) {
          return _react2.default.createElement(
            _tag2.default,
            {
              key: index,
              className: styles['selectWithTags-tag'],
              onRemove: _this2.onRemove.bind(_this2, item)
            },
            item.label
          );
        })
      );
    }
  }]);

  return SelectWithTags;
}(_react.PureComponent);

/**
 * @example <SelectWithTags />
 */


SelectWithTags.defaultProps = {
  tags: [],
  reducerName: 'list',
  placeholder: undefined,
  validationState: undefined,
  onChange: function onChange() {}
};
SelectWithTags.propTypes = {
  tags: _propTypes2.default.array,
  reducerName: _propTypes2.default.string,
  placeholder: _propTypes2.default.string,
  validationState: _propTypes2.default.string,
  onChange: _propTypes2.default.func
};
exports.default = (0, _reactCssModules2.default)(SelectWithTags, styles);