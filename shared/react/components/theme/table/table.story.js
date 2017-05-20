import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs } from '@kadira/storybook-addon-knobs';

import {
  Table,
  TableHeaderColumn
} from './table-component';

const stories = storiesOf('Table', module);

stories.addDecorator(withKnobs);

const options = {
  noDataText: 'Sem resultados'
};

const list = [
  {
    "id": "588259c0031915182ca60e39",
    "name": "Brinquedo jjjjj - Bola Quadrada 01",
    "slug": "brinquedo-jjjjj---bola-quadrada-01",
    "startDate": "2016-09-13T17:34:01-03:00",
    "endDate": "2016-09-14T17:34:01-03:00",
    "sitepage": "americanas/principal_natal",
    "position": "x10",
    "status": "expired",
    "segmentationGroups": [],
    "componentByPlatforms": {}
  },
  {
    "id": "588259c4031915182ca60e3b",
    "name": "Brinquedo lllll - Bola Quadrada 01",
    "slug": "brinquedo-lllll---bola-quadrada-01",
    "startDate": "2016-09-13T17:34:01-03:00",
    "endDate": "2016-09-14T17:34:01-03:00",
    "sitepage": "americanas/principal_natal",
    "position": "x10",
    "status": "expired",
    "segmentationGroups": [],
    "componentByPlatforms": {}
  }
];

stories.addWithInfo('Normal', () => (
  <Table data={list} options={options} bordered>
    <TableHeaderColumn dataField="name" dataAlign="center" isKey>Nome</TableHeaderColumn>
    <TableHeaderColumn dataField="status">Status</TableHeaderColumn>
    <TableHeaderColumn dataField="position">Posição</TableHeaderColumn>
    <TableHeaderColumn dataField="startDate">Data Início</TableHeaderColumn>
    <TableHeaderColumn dataField="endDate">Data Fim</TableHeaderColumn>
    <TableHeaderColumn dataField="actions">Ações</TableHeaderColumn>
  </Table>
));

