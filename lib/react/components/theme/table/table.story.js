'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _storybookAddonKnobs = require('@kadira/storybook-addon-knobs');

var _tableComponent = require('./table-component');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _storybook.storiesOf)('Table', module);

stories.addDecorator(_storybookAddonKnobs.withKnobs);

var options = {
  noDataText: 'Sem resultados'
};

var list = [{
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
}, {
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
}];

stories.addWithInfo('Normal', function () {
  return _react2.default.createElement(
    _tableComponent.Table,
    { data: list, options: options, bordered: true },
    _react2.default.createElement(
      _tableComponent.TableHeaderColumn,
      { dataField: 'name', dataAlign: 'center', isKey: true },
      'Nome'
    ),
    _react2.default.createElement(
      _tableComponent.TableHeaderColumn,
      { dataField: 'status' },
      'Status'
    ),
    _react2.default.createElement(
      _tableComponent.TableHeaderColumn,
      { dataField: 'position' },
      'Posi\xE7\xE3o'
    ),
    _react2.default.createElement(
      _tableComponent.TableHeaderColumn,
      { dataField: 'startDate' },
      'Data In\xEDcio'
    ),
    _react2.default.createElement(
      _tableComponent.TableHeaderColumn,
      { dataField: 'endDate' },
      'Data Fim'
    ),
    _react2.default.createElement(
      _tableComponent.TableHeaderColumn,
      { dataField: 'actions' },
      'A\xE7\xF5es'
    )
  );
});