import React, { PureComponent } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
// style
import '../../../scss/06-components/table.scss';

class Table extends PureComponent {
  render() {
    const { ...elementProps } = this.props;

    return (
      <BootstrapTable
        {...elementProps}
      />
    );
  }
}

export {
  Table,
  TableHeaderColumn
};
