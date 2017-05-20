import React, { PureComponent } from 'react';
import { Creatable } from 'react-select';
import CSSModules from 'react-css-modules';
// style
import styles from './autocomplete.scss';

/**
 * Autocomplete Component
 * @extends { PureComponent }
 * @class
 */
class Autocomplete extends PureComponent {
  /**
   * getText
   * @property {String} value
   */
  getText(value) {
    return value;
  }

  /**
   * render
   * @return {ReactElement} markup
   */
  render() {
    const { options, value, onChange, placeholder, disabled, name, className, onInputChange, onBlur, onInputKeyDown, onNewOptionClick, newOptionCreator } = this.props;

    return (
      <Creatable
        multi={false}
        options={options}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        noResultsText={'Sem resultados'}
        promptTextCreator={this.getText}
        name={name}
        className={className}
        clearable={false}
        onBlur={onBlur}
        onInputChange={onInputChange}
        onInputKeyDown={onInputKeyDown}
        onNewOptionClick={onNewOptionClick}
        newOptionCreator={newOptionCreator}
        filterOptions={(options, filterValue) => {
          if(!options.length > 0){
            return;
          }
          let lowerFilterValue = filterValue.toLowerCase();
          let filteredOptions = options.filter(option => {
            let optionValue = String(option.value).toLowerCase();
            let optionLabel = String(option.label).toLowerCase();
            return (optionValue.indexOf(lowerFilterValue) > -1 || optionLabel.indexOf(lowerFilterValue) > -1);
          });

          // This is the important part
          if (filterValue.length > 0) {
            filteredOptions = filteredOptions.concat({create: true, value: filterValue, label: `"${filterValue}"`, type: options[0]['type']});
          }

          return filteredOptions;
        }}
      />
    );
  }
}

/**
 * @example <Autocomplete />
 */
export default CSSModules(Autocomplete, styles);
