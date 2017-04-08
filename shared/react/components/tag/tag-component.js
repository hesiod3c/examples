import React, { PureComponent, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import classNames from "classnames";
// components
import Button from '../button';
import Svg from '../svg';
// style
import data from '../../interface';
const styles = data.styles.tag;

/**
 * Tag component
 * @extends {PureComponent }
 * @class
 */
class Tag extends PureComponent {
  /**
   * @constructor
   * @param {Object} props
   */
  constructor(props) {
    super(props);
  }

  /**
   * defaultProps
   * @property {Boolean} children
   */
  static defaultProps = {
    children: false
  };

  /**
   * propTypes
   * @property {Function} onClick
   * @property {Object} children
   */
  static propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.any.isRequired
  };

  /**
   * render
   * @return {ReactElement} markup
   */
  render() {
    const { key, children, onRemove, className, ...elementProps } = this.props;

    if (!children) {
      return null;
    }

    return (
      <div
        {...elementProps}
        key={key}
        className={classNames(className, styles.tag)}
      >
        {children}
        <span className={styles['tag-close']}>
          <Button onClick={onRemove}>
            <Svg name="icon/close" size="12px" />
          </Button>
        </span>
      </div>
    );
  }
}

/**
 * @example <Tag />
 */
export default CSSModules(Tag, styles);


