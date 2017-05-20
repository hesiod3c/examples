import React, { PureComponent } from 'react';
import classNames from 'classnames';
import CSSModules from 'react-css-modules';
// style
import styles from './form-actions.scss';

/**
 * Form Actions component
 * @extends {PureComponent }
 * @class
 */
class FormActions extends PureComponent {
  /**
   * render
   * @return {ReactElement} markup
   */
  render(){
    const { children, className, ...elementProps } = this.props;

    const fullClassName = classNames(
      className,
      styles['form-group-actions']
    );

    return (
      <div className={fullClassName}
      {...elementProps}
      >
        {children}
      </div>
    );
  }
}

/**
 * @example <FormActions></FormActions>
 */
export default CSSModules(FormActions, styles);
