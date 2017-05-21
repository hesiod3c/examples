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

var _modal = require('../../theme/modal');

var _modal2 = _interopRequireDefault(_modal);

var _interface = require('../../../interface');

var _interface2 = _interopRequireDefault(_interface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//styles


var styles = _interface2.default.styles.modalManager;

/**
 * ModalManager Component
 * @extends {PureComponent }
 * @class
 */

var ModalManager = function (_PureComponent) {
  _inherits(ModalManager, _PureComponent);

  function ModalManager() {
    _classCallCheck(this, ModalManager);

    return _possibleConstructorReturn(this, (ModalManager.__proto__ || Object.getPrototypeOf(ModalManager)).apply(this, arguments));
  }

  _createClass(ModalManager, [{
    key: 'render',


    /**
     * render
     * @return {ReactElement} markup
     */

    /**
     * defaultProps
     * @property {Array} modal
     */
    value: function render() {
      var _props = this.props,
          modals = _props.modals,
          className = _props.className,
          effect = _props.effect,
          onDismiss = _props.onDismiss;


      return _react2.default.createElement(
        'div',
        { className: className },
        modals && modals.map(function (item, index) {
          return _react2.default.createElement(_modal2.default, { key: index, data: item, effect: effect, onDismiss: onDismiss });
        })
      );
    }

    /**
     * propTypes
     * @property {Array} modal
     */

  }]);

  return ModalManager;
}(_react.PureComponent);

/**
 * @example <ModalManager />
 */


ModalManager.defaultProps = {
  modals: undefined
};
ModalManager.propTypes = {
  modals: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    name: _propTypes2.default.string.isRequired,
    id: _propTypes2.default.any.isRequired,
    header: _propTypes2.default.string,
    body: _propTypes2.default.any,
    footer: _propTypes2.default.bool,
    actionButton: _propTypes2.default.any,
    maxWidth: _propTypes2.default.number
  }))
};
exports.default = (0, _reactCssModules2.default)(ModalManager, styles);