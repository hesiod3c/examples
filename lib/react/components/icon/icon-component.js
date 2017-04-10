'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Icon component
 * @extends {PureComponent }
 * @class
 */
var Icon = function (_PureComponent) {
  _inherits(Icon, _PureComponent);

  /**
   * @constructor
   * @param {Object} props
   */
  function Icon(props) {
    _classCallCheck(this, Icon);

    var _this = _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).call(this, props));

    _this.IconPathLoader = _this.IconPathLoader.bind(_this);
    return _this;
  }

  /**
   * defaultProps
   * @property {size}
   * @property {name}
   */

  /**
   * propTypes
   * @property {String} name
   * @property {String} size
   * @property {String/Number} size
   * @property {String/Number} width
   * @property {String/Number} height
   * @property {Object} style
   */


  _createClass(Icon, [{
    key: 'IconPathLoader',
    value: function IconPathLoader(name) {
      try {
        return require('!!babel-loader!svg-react-loader!../../../images/svg/icon/' + name + '.svg');
      } catch (e) {
        return false;
      }
    }

    /**
     * render
     * @return {ReactElement} markup
     */

  }, {
    key: 'render',
    value: function render() {
      var styles = {
        fill: this.props.color,
        verticalAlign: "middle",
        width: this.props.size, // CSS instead of the width attr to support non-pixel units
        height: this.props.size // Prevents scaling issue in IE
      };

      var _props = this.props,
          name = _props.name,
          elementProps = _objectWithoutProperties(_props, ['name']);

      var Component = this.IconPathLoader(name);

      if (!Component) {
        return null;
      }

      return _react2.default.createElement(Component, _extends({ style: styles }, elementProps));
    }
  }]);

  return Icon;
}(_react.PureComponent);

/**
 * @example <Icon />
 */


Icon.defaultProps = {
  size: 16,
  name: 'user'
};
Icon.propTypes = {
  name: _propTypes2.default.string,
  color: _propTypes2.default.string,
  size: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  style: _propTypes2.default.object
};
exports.default = Icon;