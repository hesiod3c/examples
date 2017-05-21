'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _button = require('../../theme/button');

var _button2 = _interopRequireDefault(_button);

var _icon = require('../../theme/icon');

var _icon2 = _interopRequireDefault(_icon);

var _modalManager = require('../modal-manager');

var _modalManager2 = _interopRequireDefault(_modalManager);

var _interface = require('../../../interface');

var _interface2 = _interopRequireDefault(_interface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//styles


var styles = _interface2.default.styles.logout;

/**
 * Logout Component
 * @extends {PureComponent }
 * @class
 */

var Logout = function (_PureComponent) {
  _inherits(Logout, _PureComponent);

  /**
   * @constructor
   * @param {Object} props
   */
  function Logout(props) {
    _classCallCheck(this, Logout);

    var _this = _possibleConstructorReturn(this, (Logout.__proto__ || Object.getPrototypeOf(Logout)).call(this, props));

    _this.onConfirm = _this.onConfirm.bind(_this);
    _this.modalOpen = _this.modalOpen.bind(_this);
    return _this;
  }

  /**
   * defaultProps
   * @property {Function} hideNotifier
   * @property {Function} showModal
   * @property {Function} hideModal
   * @property {Array} modal
   * @property {Array} notifier
   */


  /**
   * propTypes
   * @property {Function} showModal
   * @property {Function} hideModal
   * @property {String} modal
   */


  /**
   * contextTypes
   * @property {Object} router
   */


  _createClass(Logout, [{
    key: 'onConfirm',


    /**
     * onConfirm
     */
    value: function onConfirm() {
      this.props.onLogout(this.props.handleLogout);
    }

    /**
     * Modal
     */

  }, {
    key: 'modalOpen',
    value: function modalOpen() {
      var _this2 = this;

      var id = 'logoutModal';
      var header = 'Confirmação';
      var body = function body() {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'p',
            null,
            'Deseja realmente sair?'
          )
        );
      };
      var actionButton = function actionButton() {
        return _react2.default.createElement(
          _button2.default,
          { style: 'primary', onClick: _this2.onConfirm },
          'Confirmar'
        );
      };
      this.props.showModal(id, header, body(), true, actionButton());
    }

    /**
     * render
     * @return {ReactElement} markup
     */

  }, {
    key: 'render',
    value: function render() {
      var className = this.props.className;


      return _react2.default.createElement(
        'div',
        { className: className },
        _react2.default.createElement(
          _button2.default,
          { onClick: this.modalOpen },
          'Sair ',
          _react2.default.createElement(_icon2.default, { name: 'exit' })
        ),
        _react2.default.createElement(_modalManager2.default, { modals: this.props.modal, effect: 'slideFromRight', onDismiss: this.props.hideModal })
      );
    }
  }]);

  return Logout;
}(_react.PureComponent);

Logout.defaultProps = {
  hideNotifier: function hideNotifier() {},
  showModal: function showModal() {},
  hideModal: function hideModal() {},
  modal: [],
  notifier: []
};
Logout.propTypes = {
  showModal: _propTypes2.default.func,
  hideModal: _propTypes2.default.func,
  modal: _propTypes2.default.array
};
Logout.contextTypes = {
  router: _propTypes2.default.object
};
exports.default = Logout;