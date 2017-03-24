import React, { PureComponent, PropTypes } from 'react';
import icons from './svg-icon-pack';

/**
 * SvgIcon component
 * @extends {PureComponent }
 * @class
 */
class SvgIcon extends PureComponent {
  /**
   * defaultProps
   * @property {size}
   * @property {name}
   */
  static defaultProps = {
    size: 16,
    name: 'user'
  };
  /**
   * propTypes
   * @property {name}
   * @property {color}
   * @property {size}
   * @property {style}
   */
  static propTypes = {
    name: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    style: PropTypes.object
  };
  /**
   * Merge styles
   * @param {...string} args
   */
  _mergeStyles(...args) {
    return Object.assign({}, ...args);
  }

  /**
   * render
   * @return {ReactElement} markup
   */
  render() {
    let styles = {
      fill: this.props.color,
      verticalAlign: "middle",
      width: this.props.size, // CSS instead of the width attr to support non-pixel units
      height: this.props.size // Prevents scaling issue in IE
    };

    const {name, className, ...elementProps} = this.props;

    return (
      <svg
        {...elementProps}
        viewBox="0 0 1792 1792"
        preserveAspectRatio="xMidYMid meet"
        className={className}
        style={this._mergeStyles(
          styles,
          this.props.style
        )}>
        <path d={icons[name]}></path>
      </svg>
    );
  }
}

/**
 * @example <SvgIcon />
 */
export default SvgIcon;
