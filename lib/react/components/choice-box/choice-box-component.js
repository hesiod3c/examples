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

var _formGroup = require('../form-group');

var _formGroup2 = _interopRequireDefault(_formGroup);

var _formLabel = require('../form-label');

var _formLabel2 = _interopRequireDefault(_formLabel);

var _formControl = require('../form-control');

var _formControl2 = _interopRequireDefault(_formControl);

var _tag = require('../tag');

var _tag2 = _interopRequireDefault(_tag);

var _list = require('../list');

var _list2 = _interopRequireDefault(_list);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _svgIcon = require('../svg-icon');

var _svgIcon2 = _interopRequireDefault(_svgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// components


// style
var styles = {
  'choiceBox': 'choice-box_choiceBox_3c1dD',
  'choiceBox-title': 'choice-box_choiceBox-title_3TIrn',
  'choiceBox-description': 'choice-box_choiceBox-description_y9l9Z',
  'choiceBox-formControl': 'choice-box_choiceBox-formControl_12oyx',
  'choiceBox-formGroup': 'choice-box_choiceBox-formGroup_3Uflq',
  'choiceBox-formGroup-button': 'choice-box_choiceBox-formGroup-button_2f-48',
  'choiceBox-list': 'choice-box_choiceBox-list_2yKKF',
  'choiceBox-itemWithButton': 'choice-box_choiceBox-itemWithButton_1RhWv',
  'choiceBox-itemWithButton-button': 'choice-box_choiceBox-itemWithButton-button_2O1lc',
  'choiceBox-tag': 'choice-box_choiceBox-tag_1mz4m',
  'actived': 'choice-box_actived_1otGl',
  'errorMessage': 'choice-box_errorMessage_3LpMw'
};

/**
 * ChoiceBox Component
 * @extends {PureComponent }
 * @class
 */

var ChoiceBox = function (_PureComponent) {
  _inherits(ChoiceBox, _PureComponent);

  function ChoiceBox() {
    _classCallCheck(this, ChoiceBox);

    return _possibleConstructorReturn(this, (ChoiceBox.__proto__ || Object.getPrototypeOf(ChoiceBox)).apply(this, arguments));
  }

  _createClass(ChoiceBox, [{
    key: 'render',


    /**
     * render
     * @return {ReactElement} markup
     */

    /**
     * defaultProps
     * @property {Function} onChange
     */
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          header = _props.header,
          description = _props.description,
          name = _props.name,
          placeholder = _props.placeholder,
          onClick = _props.onClick,
          options = _props.options,
          tags = _props.tags,
          tagString = _props.tagString,
          onToggle = _props.onToggle,
          onRemove = _props.onRemove,
          onDelete = _props.onDelete,
          onInputChange = _props.onInputChange,
          allowCreate = _props.allowCreate,
          allowDelete = _props.allowDelete,
          validationState = _props.validationState,
          errorMessage = _props.errorMessage;


      return _react2.default.createElement(
        'div',
        { className: styles['choiceBox'] },
        _react2.default.createElement(
          'h3',
          { className: styles['choiceBox-title'] },
          header,
          ' ',
          errorMessage && _react2.default.createElement(
            'span',
            { className: styles['errorMessage'] },
            errorMessage
          )
        ),
        _react2.default.createElement(
          'h4',
          { className: styles['choiceBox-description'] },
          description
        ),
        _react2.default.createElement(
          _formGroup2.default,
          { validationState: validationState, className: (0, _classnames2.default)(_defineProperty({}, styles['choiceBox-itemWithButton'], allowCreate)) },
          _react2.default.createElement(_formControl2.default, { className: styles['choiceBox-formControl'], placeholder: placeholder, onChange: onInputChange, name: name }),
          allowCreate && _react2.default.createElement(
            _button2.default,
            { className: styles['choiceBox-itemWithButton-button'], style: 'primary', onClick: onClick },
            _react2.default.createElement(_svgIcon2.default, { name: 'plus', size: '20px' })
          )
        ),
        _react2.default.createElement(
          _list2.default,
          { className: styles['choiceBox-list'], style: 'bordered' },
          options.map(function (item, index) {
            return _react2.default.createElement(
              _list2.default.Item,
              { key: index, className: (0, _classnames2.default)(_defineProperty({}, styles['actived'], item.checked)) },
              _react2.default.createElement(
                _formGroup2.default,
                { className: styles['choiceBox-formGroup'], style: tagString ? "radio" : "checkbox" },
                _react2.default.createElement(_formControl2.default, { type: tagString ? "radio" : "checkbox", name: tagString ? 'choiceBox-' + name : 'choiceBox-' + name + '[]', onChange: onToggle, checked: item.checked, value: item.slug }),
                _react2.default.createElement(
                  _formLabel2.default,
                  null,
                  item.name
                ),
                allowDelete && _react2.default.createElement(
                  _button2.default,
                  { className: styles['choiceBox-formGroup-button'], onClick: onDelete.bind(_this2, name, item.id) },
                  _react2.default.createElement(_svgIcon2.default, { name: 'trash' })
                )
              )
            );
          })
        ),
        !tagString && tags && tags.map(function (item, index) {
          return _react2.default.createElement(
            _tag2.default,
            { key: index, className: styles['choiceBox-tag'], onRemove: onRemove.bind(_this2, name, item) },
            item
          );
        }),
        tagString && tags.length > 0 && _react2.default.createElement(
          _tag2.default,
          { onRemove: onRemove.bind(this, name, tags) },
          tags
        )
      );
    }

    /**
     * propTypes
     * @property {Function} getRef
     */

  }]);

  return ChoiceBox;
}(_react.PureComponent);

/**
 * @example <ChoiceBox />
 */


ChoiceBox.defaultProps = {
  options: [],
  tags: [],
  header: undefined,
  name: undefined,
  description: undefined,
  placeholder: undefined,
  onClick: function onClick() {},
  tagString: false,
  onToggle: function onToggle() {},
  onRemove: function onRemove() {},
  onInputChange: function onInputChange() {},
  create: true
};
ChoiceBox.propTypes = {
  options: _react.PropTypes.array,
  tags: _react.PropTypes.oneOfType([_react.PropTypes.array, _react.PropTypes.string]),
  header: _react.PropTypes.string,
  name: _react.PropTypes.string,
  description: _react.PropTypes.string,
  placeholder: _react.PropTypes.string,
  onClick: _react.PropTypes.func,
  tagString: _react.PropTypes.bool,
  onToggle: _react.PropTypes.func,
  onRemove: _react.PropTypes.func,
  onInputChange: _react.PropTypes.func,
  create: _react.PropTypes.bool
};
exports.default = (0, _reactCssModules2.default)(ChoiceBox, styles);