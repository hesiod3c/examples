import '../../../../../internals/test/helper';
import { Table, TableHeaderColumn } from './index';

/** @test {Table} */
 describe('Table component', function() {
   /** @test {Table#render} */
   describe('#render', () => {
     const options = {
       noDataText: 'Sem resultados'
     };
     const list = [
       { "name": "Brinquedo jjjjj - Bola Quadrada 01" },
       { "name": "Brinquedo lllll - Bola Quadrada 01" }
     ];
     let instance = ReactTestUtils.renderIntoDocument(
       <Table data={list} options={options} bordered>
         <TableHeaderColumn dataField="name" dataAlign="center" isKey>Nome</TableHeaderColumn>
       </Table>
     );

     it('Should output a table', () => {
       let divs = ReactTestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
       assert.equal(divs.length, 5);
     });
   });
 });
