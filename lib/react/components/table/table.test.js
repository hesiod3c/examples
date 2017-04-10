'use strict';

require('../../../../internals/test/helper');

var _index = require('./index');

/** @test {Table} */
describe('Table component', function () {
  /** @test {Table#render} */
  describe('#render', function () {
    var options = {
      noDataText: 'Sem resultados'
    };
    var list = [{ "name": "Brinquedo jjjjj - Bola Quadrada 01" }, { "name": "Brinquedo lllll - Bola Quadrada 01" }];
    var instance = ReactTestUtils.renderIntoDocument(React.createElement(
      _index.Table,
      { data: list, options: options, bordered: true },
      React.createElement(
        _index.TableHeaderColumn,
        { dataField: 'name', dataAlign: 'center', isKey: true },
        'Nome'
      )
    ));

    it('Should output a table', function () {
      var divs = ReactTestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
      assert.equal(divs.length, 5);
    });
  });
});