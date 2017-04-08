import React, { PureComponent, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import classNames from 'classnames';
// components
import Button from '../button';
import Svg from '../svg';
// style
import data from '../../interface';
const styles = data.styles.alert;
/**
 * Alert component
 * @extends { PureComponent }
 * @class
 */
class Alert extends PureComponent {
  /**
   * @constructor
   * @param {Object} props
   */
  constructor(props){
    super(props);

    this.getIcon = this.getIcon.bind(this);
  }

  /**
   * defaultProps
   * @property {String} type
   * @property {Function} onDismiss
   * @property {String} dismissTitle
   * @property {Boolean} showIcon
   * @property {Boolean} dark
   * @property {String} id
   * @property {Node} children
   */
  static defaultProps = {
    type: 'info',
    onDismiss: undefined,
    dismissTitle: 'Notificação',
    showIcon: false,
    dark: false,
    id: undefined,
    children: undefined
  };

  /**
   * propTypes
   * @property {String} type
   * @property {Function} onDismiss
   * @property {String} dismissTitle
   * @property {Boolean} showIcon
   * @property {Boolean} dark
   * @property {String} id
   * @property {Node} children
   */
  static propTypes = {
    type: PropTypes.oneOf(['info', 'warning', 'success', 'danger']),
    onDismiss: PropTypes.func,
    dismissTitle: PropTypes.string,
    showIcon: PropTypes.bool,
    dark: PropTypes.bool,
    id: PropTypes.string,
    children: PropTypes.any.isRequired
  };

  /**
   * getIcon
   * @property {String} type
   */
  getIcon(type) {
    switch (type){
      case 'info':
        return 'icon/info-circle';
      case 'success':
        return 'icon/check';
      case 'warning':
        return 'icon/warning';
      case 'danger':
        return 'icon/shield';
    }
  }

  /**
   * render
   * @return {ReactElement} markup
   */
  render(){
    const { onDismiss, children, type, headline, dismissTitle, showIcon, dark } = this.props;
    const fullClassName = classNames({
        [styles.dismissable]: onDismiss,
        [styles[type]]: type,
        [styles['alert--dark']]: dark,
        [styles['alert--icon']]: showIcon
      });
    const icon = this.getIcon(type);

    if (!children) {
      return null;
    }

    return (
      <div>
        <div className={fullClassName}>
          {onDismiss &&
            <Button style="transparent" size="none" className={styles.close} title={dismissTitle} onClick={onDismiss}>
              <Svg name="icon/close" />
            </Button>
          }

          {showIcon &&
           <Svg className={styles.icon} name={icon} size="30px" />
          }
          <div className={styles.msgContainer}>
            {headline ? <h4 className={styles.headline}>{headline}</h4> : null}
            <div className={styles.body}>
              {children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/**
 * @example <Alert />
 */
export default CSSModules(Alert, styles);
