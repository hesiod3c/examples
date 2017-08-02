import React, { PureComponent } from 'react';
import TableSource from './source/table';
// style
import '../../../../scss/06-components/table.scss';

class Table extends PureComponent {
  render() {
    const { ...elementProps } = this.props;

    return (
      <TableSource
        {...elementProps}
      />
    );
  }
}

export default Table;
