import '../../../../internals/test/helper';
import Autocomplete from './index';

import data from '../../interface';
const styles = data.styles.autocomplete;

/** @test {Autocomplete} */
describe('Autocomplete component', function() {
  /** @test {Autocomplete#render} */
  describe('#render', () => {
    const options = [
      { value: 'Red', label: 'Red' },
      { value: 'Green', label: 'Green' },
      { value: 'Blue', label: 'Blue' }
    ];
    let instance = ReactTestUtils.renderIntoDocument(
      <Autocomplete options={options} />
    );

    it('Should output an autocomplete', () => {
      let divs = ReactTestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
      assert.equal(divs.length, 5);
    });
  });
});
