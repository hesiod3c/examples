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
    const { onChange, name, inputProps, value, defaultValue, input, open, utc, onFocus, onBlur, viewMode, className, isValidDate, renderDay, renderMonth, renderYear, strictParsing, closeOnSelect, closeOnTab, timeConstraints, disableOnClickOutside } = this.props;
    return (
      <Datetime
        className={className}
        dateFormat={'DD/MM/YYYY'}
        timeFormat={'H:mm'}
        locale="pt-br"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        name={name}
        inputProps={inputProps}
        value={value}
        defaultValue={defaultValue}
        input={input}
        open={open}
        utc={utc}
        viewMode={viewMode}
        isValidDate={isValidDate}
        renderDay={renderDay}
        renderMonth={renderMonth}
        renderYear={renderYear}
        strictParsing={strictParsing}
        closeOnSelect={closeOnSelect}
        closeOnTab={closeOnTab}
        timeConstraints={timeConstraints}
        disableOnClickOutside={disableOnClickOutside}
      />
    );
  }
}

/**
 * @example <DatetimePicker />
 */
export default CSSModules(DatetimePicker, styles);


