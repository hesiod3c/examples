import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
// component
import Datetime from 'react-datetime';
// style
import styles from '../../../scss/06-components/datetime-picker.scss';

/**
 * DatetimePicker component
 * @class
 */
class DatetimePicker extends Component {
  /**
   * render
   * @return {ReactElement} markup
   */
  render() {
    const { onChange, name } = this.props;
    return (
      <Datetime
        dateFormat={'DD/MM/YYYY'}
        timeFormat={'H:mm'}
        locale="pt-br"
        onChange={onChange}
        name={name}
      />
    );
  }
}

/**
 * @example <DatetimePicker />
 */
export default CSSModules(DatetimePicker, styles);


