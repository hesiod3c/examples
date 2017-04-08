import React, { PureComponent, PropTypes } from 'react';

/**
 * Svg component
 * @extends {PureComponent }
 * @class
 */
class Svg extends PureComponent {
  /**
   * @constructor
   * @param {Object} props
   */
  constructor(props) {
    super(props);

    this.svgPathLoader = this.svgPathLoader.bind(this);
  }

  /**
   * defaultProps
   * @property {size}
   * @property {name}
   * @property {color}
   */
  static defaultProps = {
    size: 16,
    name: 'icon/user',
    color: "#000000"
  };
  /**
   * propTypes
   * @property {String} name
   * @property {String} size
   * @property {String/Number} size
   * @property {Object} style
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

  svgPathLoader(name) {
    try {
      return require(`!!babel-loader!svg-react-loader!../../../images/svg/${name}.svg`);
    } catch (e) {
      return false;
    }
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

    const { name, ...elementProps} = this.props;
    const Component = this.svgPathLoader(name);

    if (!Component) {
      return null;
    }

    return <Component style={styles} {...elementProps}/>;
  }
}

/**
 * @example <Svg />
 */
export default Svg;
