'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _svg = require('../svg');

var _svg2 = _interopRequireDefault(_svg);

var _interface = require('../../interface');

var _interface2 = _interopRequireDefault(_interface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// components

// style


var styles = _interface2.default.styles.modal;

/**
 * Modal Component
 * @extends {PureComponent }
 * @class
 */

var Modal = function (_PureComponent) {
  _inherits(Modal, _PureComponent);

  function Modal() {
    _classCallCheck(this, Modal);

    return _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).apply(this, arguments));
  }

  _createClass(Modal, [{
    key: 'render',

    /**
     * defaultProps
     * @property {String} effect
     */
    value: function render() {
      var _props = this.props,
          effect = _props.effect,
          onDismiss = _props.onDismiss,
          data = _props.data,
          key = _props.key;


      if (!data) {
        return null;
      }

      var maxWidth = data ? data.maxWidth + 'px' : 'auto';

      return _react2.default.createElement(
        'div',
        {
          ref: 'overlay',
          className: styles.overlay,
          key: key
        },
        _react2.default.createElement(
          'div',
          {
            ref: 'content',
            className: (0, _classnames2.default)(styles.content, styles[effect]),
            style: { maxWidth: maxWidth }
          },
          _react2.default.createElement(
            'div',
            null,
            data.header && _react2.default.createElement(
              'header',
              { className: styles.header },
              _react2.default.createElement(
                'h3',
                { className: styles['header-title'] },
                data.header
              ),
              _react2.default.createElement(
                _button2.default,
                { onClick: function onClick() {
                    return onDismiss(data);
                  } },
                _react2.default.createElement(_svg2.default, { name: 'icon/close' })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: styles.body },
              data.body
            ),
            data.footer && _react2.default.createElement(
              'footer',
              { className: styles.footer },
              _react2.default.createElement(
                _button2.default,
                { onClick: function onClick() {
                    return onDismiss(data);
                  } },
                'Fechar'
              ),
              data.actionButton
            )
          )
        )
      );
    }

    /**
     * propTypes
     * @property {String} effect
     * @property {Function} onDismiss
     */

  }]);

  return Modal;
}(_react.PureComponent);

/**
 * @example <Modal />
 */


Modal.defaultProps = {
  effect: 'scaleUp'
};
Modal.propTypes = {
  effect: _propTypes2.default.oneOf(['scaleUp', 'slideFromRight', 'slideFromBottom', 'newspaper', 'fall', 'sideFall', 'flipHorizontalThreeD', 'flipVerticalThreeD', 'signThreeD', 'superScaled', 'rotateFromBottomThreeD', 'rotateFromLeftThreeD']),
  onDismiss: _propTypes2.default.func
};
exports.default = (0, _reactCssModules2.default)(Modal, styles);