import React, { PureComponent } from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
// style
import './table.scss';

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
