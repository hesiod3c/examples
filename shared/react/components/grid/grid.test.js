import '../../../../internals/test/helper';
import Grid from './index';

import data from '../../interface';
const styles = data.styles.grid;

/** @test {Grid} */
describe('Grid component', function() {
  /** @test {Grid#render} */
  describe('#render', () => {
    let instance = ReactTestUtils.renderIntoDocument(
      <Grid></Grid>
    );

    it('Should output a grid', () => {
      assert.isOk(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'div'));
    });

    it('Should output a grid with default style', () => {
      assert.isOk(ReactDOM.findDOMNode(instance).className.match(styles['container']));
    });
  });
});
