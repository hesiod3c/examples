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

var _placeholders = require('./placeholders');

var placeholders = _interopRequireWildcard(_placeholders);

var _interface = require('../../../interface');

var _interface2 = _interopRequireDefault(_interface);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//styles


var styles = _interface2.default.styles.placeholder;

var Placeholder = function (_PureComponent) {
  _inherits(Placeholder, _PureComponent);

  function Placeholder(props) {
    _classCallCheck(this, Placeholder);

    var _this = _possibleConstructorReturn(this, (Placeholder.__proto__ || Object.getPrototypeOf(Placeholder)).call(this, props));

    _this.state = {
      ready: _this.props.ready
    };

    _this.isReady = _this.isReady.bind(_this);
    return _this;
  }

  _createClass(Placeholder, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (!this.state.ready) {
        this.setState({
          ready: nextProps.ready
        });
      }
    }
  }, {
    key: 'isReady',
    value: function isReady() {
      return this.props.firstLaunchOnly ? this.state.ready : this.props.ready;
    }

    /**
     * render
     * @return {ReactElement} markup
     */

  }, {
    key: 'render',
    value: function render() {
      if (this.isReady()) {
        return this.props.children;
      }

      var _props = this.props,
          type = _props.type,
          customPlaceholder = _props.customPlaceholder,
          rest = _objectWithoutProperties(_props, ['type', 'customPlaceholder']);

      if (customPlaceholder) {
        return customPlaceholder;
      }

      var Component = placeholders[type];

      return _react2.default.createElement(Component, rest);
    }
  }]);

  return Placeholder;
}(_react.PureComponent);

Placeholder.propTypes = {
  reducerName: _propTypes2.default.string,
  children: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.element]).isRequired,
  ready: _propTypes2.default.bool.isRequired,
  firstLaunchOnly: _propTypes2.default.bool,
  type: _propTypes2.default.oneOf(['text', 'media', 'textRow', 'rect', 'round']),
  rows: _propTypes2.default.number,
  color: _propTypes2.default.string,
  customPlaceholder: _propTypes2.default.oneOfType([_propTypes2.default.node, _propTypes2.default.element])
};
Placeholder.defaultProps = {
  reducerName: 'list',
  type: 'text',
  color: '#cdcdcd'
};
exports.default = (0, _reactCssModules2.default)(Placeholder, styles);