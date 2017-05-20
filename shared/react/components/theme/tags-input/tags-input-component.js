import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactTagsInput from 'react-tagsinput';
import CSSModules from 'react-css-modules';
// components
import Tag from '../tag';
// style
import styles from './tags-input.scss';

/**
 * TagsInput Component
 * @extends { PureComponent }
 * @class
 */
class TagsInput extends PureComponent {
  /**
   * defaultProps
   * @property {Function} onChange
   * @property {String} value
   * @property {Object} inputProps
   * @property {Boolean} disabled
   */
  static defaultProps = {
    onChange: () => {},
    value: [],
    inputProps: {},
    disabled: false
  };

  /**
   * propTypes
   * @property {Function} onChange
   * @property {Array} value
   * @property {Object} inputProps
   * @property {Boolean} disabled
   */
  static propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.array,
    inputProps: PropTypes.object,
    disabled: PropTypes.bool
  };

  /**
   * renderTag
   * @param {Object} props
   */
  renderTag(props) {
    let { tag, key, onRemove, getTagDisplayValue } = props;

    return (
      <Tag key={key} className={styles.tag} onRemove={() => onRemove(key)}>
      {getTagDisplayValue(tag)}
      </Tag>
    )
  }
  /**
   * render
   * @return {ReactElement} markup
   */
  render() {
    const { value, onChange, inputProps, disabled } = this.props;

    return (
      <ReactTagsInput
        disabled={disabled}
        inputProps={inputProps}
        value={value}
        onChange={onChange}
        renderTag={this.renderTag}
      />
    );
  }
}

/**
 * @example <TagsInput />
 */
export default CSSModules(TagsInput, styles);
