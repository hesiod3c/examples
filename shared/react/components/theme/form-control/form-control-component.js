import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CSSModules from 'react-css-modules';
// components
import Icon from '../icon';
//styles
import data from '../../../interface';
const styles = data.styles.formControl;

/**
 * Form Control component
 * @extends {PureComponent }
 * @class
 */
class FormControl extends PureComponent {
  /**
   * @constructor
   * @param {Object} props
   */
  constructor(props, context){
    super(props, context)

    this._hasType = this._hasType.bind(this);
    this._getFeedback = this._getFeedback.bind(this);
    this._getComponent = this._getComponent.bind(this);
    this._setClass = this._setClass.bind(this);
    this._generateAddon = this._generateAddon.bind(this);
    this._generateComponent = this._generateComponent.bind(this);
    this._generateFeedback = this._generateFeedback.bind(this);
  }

  /**
   * Default props values
   * @property {Function} onChange
   * @property {Function} onFocus
   * @property {Function} onBlur
   * @property {Node} addonBefore
   * @property {Node} addonAfter
   * @property {Boolean} feedback
   * @property {String} type
   */
  static defaultProps = {
    disabled: false,
    addonBefore: false,
    addonAfter: false,
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {},
    feedback: false,
    type: 'text'
  };

  /**
   * propTypes
   * @property {Function} getRef
   * @property {Function} onChange
   * @property {Function} onFocus
   * @property {Function} onBlur
   * @property {Node} addonBefore
   * @property {Node} addonAfter
   * @property {Boolean} feedback
   * @property {String} type
   */
  static propTypes = {
    getRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    addonAfter: PropTypes.node,
    addonBefore: PropTypes.node,
    feedback: PropTypes.bool,
    type: PropTypes.oneOf(['text', 'password', 'select', 'textarea', 'radio', 'checkbox', 'file', 'hidden', 'search', 'email', 'range', 'number', 'month', 'tel', 'time', 'url', 'week', 'date', 'datetime', 'color'])
  };

  /**
   * contextTypes
   * @property {Object} $formGroup
   */
  static contextTypes = {
    $formGroup: PropTypes.object
  };

  /**
   * Generate Feedback
   */
  _generateFeedback(validationState, feedback, addonAfter) {
    if ((!validationState && !feedback && addonAfter) || !feedback || !validationState) {
      return null;
    }

    return (
      <span className={styles['form-feedback']}>{this._getFeedback(validationState)}</span>
    );
  }

  /**
   * Generate Addon
   */
  _generateAddon(type, children) {
    if (!type || !children) {
      return null;
    }

    return (
      <span className={styles[`form-addon-${type}`]}>{children}</span>
    );
  }

  /**
   * Generate component
   */
  _generateComponent(controlId, type) {
    const finalClass = this._setClass(type);
    const Component = this._getComponent(type);
    const {
      /* eslint-disable */
      addonBefore, addonAfter, feedback,
      /* eslint-enable */
      getRef, onChange, onFocus, onBlur, disabled, children, name, value, ...elementProps } = this.props;

    // type of component
    if (this._hasType(type)) {
      elementProps.type = type;
    } else {
      delete elementProps.type;
    }

    return (
      <Component
        {...elementProps}
        ref={getRef}
        className={finalClass}
        id={controlId}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        disabled={disabled}
        name={name}
        value={value}
      >
        {children}
      </Component>
    );
  }

  /**
   * Generate component
   */
  _getComponent(type) {
    let Component = '';

    switch(type) {
      case 'textarea':
        Component = 'textarea';
        break;
      case 'select':
        Component = 'select';
        break;
      default :
        Component = 'input';
        break;
    }

    return Component;
  }

  /**
   * Has type
   */
  _hasType(type){
    return type !== 'select' && type !== 'textarea';
  }

  /**
   * Get feedback
   */
  _getFeedback(state){
    let result;

    switch (state) {
      case 'success':
        result = <Icon name="check" />;
        break;
      case 'warning':
        result = <Icon name="warning" />;
        break;
      case 'error':
        result = <Icon name="close" />;
        break;
    }

    return result;
  }

  /**
   * Set class
   */
  _setClass(type){
    let fieldDefault = false;
    let fieldTextarea = false;
    let fieldSelect = false;
    let fieldRadio = false;
    let fieldCheckbox = false;
    let fullClassName = '';

    switch (type) {
      case 'textarea':
        fieldTextarea = true;
        break;
      case 'select':
        fieldSelect = true;
        break;
      case 'radio':
        fieldRadio = true;
        break;
      case 'checkbox':
        fieldCheckbox = true;
        break;
      default:
        fieldDefault = true;
    }

    fullClassName = classNames({
      [styles['form-field']] : fieldDefault,
      [styles['form-field--radio']]: fieldRadio,
      [styles['form-field--checkbox']]: fieldCheckbox,
      [styles['form-field--textarea']]: fieldTextarea,
      [styles['form-field--select']]: fieldSelect
    });

    return fullClassName;
  }

  /**
   * render
   * @return {ReactElement} markup
   */
  render(){
    const { type, addonBefore, addonAfter, feedback, className } = this.props;

    // context
    const formGroup = this.context.$formGroup;
    const controlId = formGroup && formGroup.controlId || undefined;
    const validationState = formGroup && formGroup.validationState;

    const addonClass = classNames(
      className,
      styles['form-addon'],
    {
      [styles['form-addon--withItens']] : (addonBefore || addonAfter || feedback)
    });

    // intern components
    const generateAddonBefore = this._generateAddon('before', addonBefore);
    const generateAddonAfter = this._generateAddon('after', addonAfter);
    const generateFeedback = this._generateFeedback(validationState, feedback, addonAfter);

    const generateComponent = this._generateComponent(controlId, type);

    return (
      <div className={addonClass}>
        {generateAddonBefore}
        {generateComponent}
        {generateAddonAfter}
        {generateFeedback}
      </div>
    );
  }
}

/**
 * @example <FormControl />
 */
export default CSSModules(FormControl, styles);
