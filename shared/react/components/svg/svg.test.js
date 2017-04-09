import '../../../../internals/test/helper';
import Svg from './index';

//import data from '../../interface';
//const styles = data.styles.svg;

/** @test {Svg} */
 describe('Svg component', function() {
   /** @test {Svg#render} */
   describe('#render', () => {
     let instance = ReactTestUtils.renderIntoDocument(
       <Svg />
     );

     it('Should output a svg', () => {
       assert.isOk(ReactTestUtils.scryRenderedDOMComponentsWithTag(instance, 'svg'));
     });

   });
 });
