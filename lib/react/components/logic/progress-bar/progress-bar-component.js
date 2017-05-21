'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactCssModules = require('react-css-modules');

var _reactCssModules2 = _interopRequireDefault(_reactCssModules);

var _interface = require('../../../interface');

var _interface2 = _interopRequireDefault(_interface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
//styles


var styles = _interface2.default.styles.progressBar;

/**
 * ProgressBar component
 * @extends {PureComponent }
 * @class
 */

var ProgressBar = function (_PureComponent) {
  _inherits(ProgressBar, _PureComponent);

  /**
   * @constructor
   * @param {Object} props
   */
  function ProgressBar(props) {
    _classCallCheck(this, ProgressBar);

    var _this = _possibleConstructorReturn(this, (ProgressBar.__proto__ || Object.getPrototypeOf(ProgressBar)).call(this, props));

    _this.simulateProgress = _this.simulateProgress.bind(_this);
    _this.resetProgress = _this.resetProgress.bind(_this);
    _this.launch = _this.launch.bind(_this);
    _this.resetProgress = _this.resetProgress.bind(_this);
    return _this;
  }

  /**
   * defaultProps
   * @property {Number} updateTime
   * @property {Number} maxProgress
   * @property {Number} progressIncrease
   * @property {Number} animationTime
   */


  /**
   * propTypes
   * @property {Object} style
   * @property {Number} updateTime
   * @property {Number} maxProgress
   * @property {Number} progressIncrease
   * @property {Number} animationTime
   */


  _createClass(ProgressBar, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (this.props.loading > 0) {
        this.launch();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.loading > this.props.loading) {
        this.launch();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.props.progressInterval);
      clearTimeout(this.props.animationTimeout);
    }

    /**
     * Launch
     */

  }, {
    key: 'launch',
    value: function launch() {
      var _props = this.props,
          progressInterval = _props.progressInterval,
          percent = _props.percent;
      var animationTimeout = this.props.animationTimeout;


      if (!progressInterval) {
        progressInterval = setInterval(this.simulateProgress, this.props.updateTime);
        clearTimeout(animationTimeout);
        percent = 0;
      }

      this.props.actions.progressBarLaunch(progressInterval, percent);
    }

    /**
     * simulateProgress
     */

  }, {
    key: 'simulateProgress',
    value: function simulateProgress() {
      var _props2 = this.props,
          progressInterval = _props2.progressInterval,
          percent = _props2.percent,
          animationTimeout = _props2.animationTimeout;


      if (percent === 100) {
        clearInterval(progressInterval);
        animationTimeout = setTimeout(this.resetProgress, this.props.animationTime);
        progressInterval = null;
      } else if (this.props.loading === 0) {
        percent = 100;
      } else if (percent < this.props.maxProgress) {
        percent += this.props.progressIncrease;
      }

      this.props.actions.progressBarSimulate(percent, progressInterval, animationTimeout);
    }

    /**
     * resetProgress
     */

  }, {
    key: 'resetProgress',
    value: function resetProgress() {
      this.props.actions.progressBarReset();
    }

    /**
     * buildStyle
     */

  }, {
    key: 'buildStyle',
    value: function buildStyle() {
      var style = {
        width: this.props.percent + '%',
        transition: 'width ' + this.props.animationTime + 'ms ease-out,\n                   height ' + this.props.animationTime + 'ms linear,\n                   opacity ' + this.props.animationTime + 'ms ease-out',
        opacity: '1'
      };

      return _extends({}, style, this.props.style);
    }

    /**
     * render
     * @return {ReactElement} markup
     */

  }, {
    key: 'render',
    value: function render() {

      var style = this.buildStyle();
      var rocketStyle = {
        left: this.props.percent + '%',
        transition: 'left ' + this.props.animationTime + 'ms ease-out'
      };

      var shouldShow = this.props.percent > 0 && this.props.percent < 100;
      if (shouldShow) {
        style.opacity = '1';
      } else {
        style.opacity = '0';
      }

      return _react2.default.createElement(
        'div',
        { style: style, className: styles.progressBar },
        _react2.default.createElement(
          'svg',
          { x: '0', y: '0', width: '30.029', height: '17.16', viewBox: '0 0 60 34.286', style: rocketStyle, className: styles.rocket },
          _react2.default.createElement(
            'g',
            null,
            _react2.default.createElement(
              'g',
              null,
              _react2.default.createElement('polygon', { fill: '#1a7563', points: '5.458,23.233 3.01,21.587 3.01,12.479 5.458,11.656' }),
              _react2.default.createElement('path', { fill: '#1a7563', d: 'M7.864,8.489L0.844,0.225c0,0,13.708-0.793,17.957,0.603c2.058,0.676,7.056,4.884,7.056,4.884 s-6.688,0.471-8.873,0.808C14.671,6.877,7.864,8.489,7.864,8.489z' }),
              _react2.default.createElement('path', { fill: '#1a7563', d: 'M7.021,25.797L0,34.062c0,0,13.708,0.793,17.957-0.603c2.059-0.676,7.057-4.884,7.057-4.884 s-6.688-0.471-8.874-0.808C13.827,27.409,7.021,25.797,7.021,25.797z' })
            ),
            _react2.default.createElement('path', { fill: '#ffffff', d: 'M60,17.096c0,6.287-14.096,11.384-31.482,11.384c-9.006,0-18.015-0.38-23.01-3.812 C5.415,24.603,5.433,9.351,5.639,9.271c5.725-2.228,13.867-3.559,22.879-3.559C45.904,5.712,60,10.808,60,17.096z' }),
            _react2.default.createElement('path', { fill: '#ececed', d: 'M60,17.096c0,0,0.373,10.72-31.482,11.384c-9.003,0.188-18.015-0.38-23.01-3.812 c-0.093-0.065-0.262-7.282-0.048-7.223c6.703,1.866,15.02,2.602,24.03,2.602C46.877,20.047,60,17.096,60,17.096z' })
          )
        )
      );
    }
  }]);

  return ProgressBar;
}(_react.PureComponent);

/**
 * @example <ProgressBar />
 */


ProgressBar.defaultProps = {
  updateTime: 100,
  maxProgress: 100,
  progressIncrease: 5,
  animationTime: 100 * 2
};
ProgressBar.propTypes = {
  style: _react.PropTypes.object,
  loading: _react.PropTypes.number,
  updateTime: _react.PropTypes.number,
  maxProgress: _react.PropTypes.number,
  progressIncrease: _react.PropTypes.number
};
exports.default = (0, _reactCssModules2.default)(ProgressBar, styles);