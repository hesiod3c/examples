'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _svgIcon = require('../svg-icon');

var _svgIcon2 = _interopRequireDefault(_svgIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// components


// style
var styles = {
  'overlay': 'modal_overlay_1sFUG',
  'show': 'modal_show_1vrzp',
  'content': 'modal_content_vQ90f',
  'header': 'modal_header_2-dz1',
  'header-title': 'modal_header-title_2fN-G',
  'body': 'modal_body_3ltF9',
  'footer': 'modal_footer_1Btip',
  'scaleUp': 'modal_scaleUp_vu7Xm',
  'slideFromRight': 'modal_slideFromRight_3CIsJ',
  'slideFromBottom': 'modal_slideFromBottom_288HN',
  'newspaper': 'modal_newspaper_3HryW',
  'fall': 'modal_fall_TxW9s',
  'sideFall': 'modal_sideFall_2T9U8',
  'flipHorizontalThreeD': 'modal_flipHorizontalThreeD_1RqJh',
  'flipVerticalThreeD': 'modal_flipVerticalThreeD_3dIKk',
  'signThreeD': 'modal_signThreeD_27e12',
  'superScaled': 'modal_superScaled_5Uk6S',
  'rotateFromBottomThreeD': 'modal_rotateFromBottomThreeD_sJvri',
  'rotateFromLeftThreeD': 'modal_rotateFromLeftThreeD_2dP0C'
};

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
            style: { maxWidth: data.maxWidth + 'px' }
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
                _react2.default.createElement(_svgIcon2.default, { name: 'close' })
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
  effect: _react.PropTypes.oneOf(['scaleUp', 'slideFromRight', 'slideFromBottom', 'newspaper', 'fall', 'sideFall', 'flipHorizontalThreeD', 'flipVerticalThreeD', 'signThreeD', 'superScaled', 'rotateFromBottomThreeD', 'rotateFromLeftThreeD']),
  onDismiss: _react.PropTypes.func
};
exports.default = (0, _reactCssModules2.default)(Modal, styles);