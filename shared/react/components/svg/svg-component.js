import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

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

    this.pathLoader = this.pathLoader.bind(this);
  }

  /**
   * defaultProps
   * @property {String} src
   */
  static defaultProps = {
    src: 'logo/acom',
    width: 'auto',
    height: 'auto'
  };
  /**
   * propTypes
   * @property {String} src
   * @property {String/Number} width
   * @property {String/Number} height
   * @property {Object} style
   */
  static propTypes = {
    src: PropTypes.string,
    width: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    height: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    style: PropTypes.object
  };

  pathLoader(src) {
    try {
      return require(`!!babel-loader!svg-react-loader!../../../images/svg/${src}.svg`);
    } catch (e) {
      if(src){
        try {
          return require(`!!babel-loader!svg-react-loader!../../../../../../${src}.svg`);
        } catch (e) {
          return false;
        }
      }
      return false;
    }
  }

  /**
   * render
   * @return {ReactElement} markup
   */
  render() {
    let styles = {
      verticalAlign: "middle",
      width: this.props.width, // CSS instead of the width attr to support non-pixel units
      height: this.props.height // Prevents scaling issue in IE
    };

    const { src, ...elementProps} = this.props;
    const Component = this.pathLoader(src);

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
