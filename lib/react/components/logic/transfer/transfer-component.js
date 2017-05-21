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

var _list = require('../../theme/list');

var _list2 = _interopRequireDefault(_list);

var _icon = require('../../theme/icon');

var _icon2 = _interopRequireDefault(_icon);

var _button = require('../../theme/button');

var _button2 = _interopRequireDefault(_button);

var _interface = require('../../../interface');

var _interface2 = _interopRequireDefault(_interface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//styles


var styles = _interface2.default.styles.transfer;

/**
 * Transfer Component
 * @extends {PureComponent }
 * @class
 */

var Transfer = function (_PureComponent) {
  _inherits(Transfer, _PureComponent);

  /**
   * @constructor
   * @param {Object} props
   */
  function Transfer(props) {
    _classCallCheck(this, Transfer);

    var _this = _possibleConstructorReturn(this, (Transfer.__proto__ || Object.getPrototypeOf(Transfer)).call(this, props));

    _this.addItem = _this.addItem.bind(_this);
    _this.removeItem = _this.removeItem.bind(_this);
    _this.selectItem = _this.selectItem.bind(_this);
    return _this;
  }

  /**
   * defaultProps
   * @property {Array} items
   * @property {Array} filtered
   * @property {String} reducerName
   * @property {String} listTitle
   * @property {String} filteredListTitle
   * @property {Function} onChange
   */


  /**
   * propTypes
   * @property {Array} items
   * @property {Array} filtered
   * @property {String} reducerName
   * @property {String} listTitle
   * @property {String} filteredListTitle
   * @property {Function} onChange
   */


  _createClass(Transfer, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.onGetItems(this.props.items, this.props.filtered);
    }

    /**
     * addItem
     */

  }, {
    key: 'addItem',
    value: function addItem() {
      this.props.onAddItems();
    }

    /**
     * removeItem
     */

  }, {
    key: 'removeItem',
    value: function removeItem() {
      this.props.onRemoveItems();
    }

    /**
     * selectItem
     * @property {Object} item
     * @property {String} type
     */

  }, {
    key: 'selectItem',
    value: function selectItem(item, type) {
      this.props.onSelectItem(item, type);
    }

    /**
     * render
     * @return {ReactElement} markup
     */

  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _ref = this.props[this.props.reducerName] || { list: [], filteredList: [], addItems: [], removeItems: [] },
          list = _ref.list,
          filteredList = _ref.filteredList,
          addItems = _ref.addItems,
          removeItems = _ref.removeItems;

      return _react2.default.createElement(
        'div',
        { className: styles.transfer },
        _react2.default.createElement(
          'div',
          { className: styles['transfer-box'] },
          _react2.default.createElement(
            'h3',
            { className: styles['transfer-title'] },
            this.props.listTitle
          ),
          _react2.default.createElement(
            _list2.default,
            { className: styles['transfer-list'], style: 'bordered' },
            list.map(function (item, index) {
              return _react2.default.createElement(
                _list2.default.Item,
                {
                  key: index,
                  onClick: _this2.selectItem.bind(_this2, item, 'add'),
                  className: (0, _classnames2.default)(styles['transfer-item'], _defineProperty({}, styles.on, item.selected))
                },
                item.label
              );
            })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: styles['transfer-operator'] },
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              _button2.default,
              {
                onClick: this.addItem,
                disabled: addItems.length === 0,
                className: styles['transfer-operator-button'],
                style: 'primary'
              },
              _react2.default.createElement(_icon2.default, { name: 'arrow-right' })
            )
          ),
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
              _button2.default,
              {
                onClick: this.removeItem,
                disabled: removeItems.length === 0,
                className: styles['transfer-operator-button'],
                style: 'primary'
              },
              _react2.default.createElement(_icon2.default, { name: 'arrow-left' })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: styles['transfer-box'] },
          _react2.default.createElement(
            'h3',
            { className: styles['transfer-title'] },
            this.props.filteredListTitle
          ),
          _react2.default.createElement(
            _list2.default,
            { className: styles['transfer-list'], style: 'bordered' },
            filteredList.map(function (item, index) {
              return _react2.default.createElement(
                _list2.default.Item,
                {
                  key: index,
                  onClick: _this2.selectItem.bind(_this2, item, 'remove'),
                  className: (0, _classnames2.default)(styles['transfer-item'], _defineProperty({}, styles.on, item.selected))
                },
                item.label
              );
            })
          )
        )
      );
    }
  }]);

  return Transfer;
}(_react.PureComponent);

/**
 * @example <Transfer />
 */


Transfer.defaultProps = {
  items: [],
  filtered: [],
  reducerName: 'list',
  listTitle: 'Lista de itens',
  filteredListTitle: 'Itens escolhidos',
  onChange: function onChange() {}
};
Transfer.propTypes = {
  items: _propTypes2.default.array,
  filtered: _propTypes2.default.array,
  reducerName: _propTypes2.default.string,
  listTitle: _propTypes2.default.string,
  filteredListTitle: _propTypes2.default.string,
  onChange: _propTypes2.default.func
};
exports.default = (0, _reactCssModules2.default)(Transfer, styles);