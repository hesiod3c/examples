import '../../../../internals/test/helper';
import TagsInput from './index';

import data from '../../interface';
const styles = data.styles.tagsInput;

/** @test {TagsInput} */
describe('TagsInput component', function() {
  /** @test {TagsInput#render} */
  describe('#render', () => {
    let instance = ReactTestUtils.renderIntoDocument(
      <TagsInput />
    );

    it('Should output a tags input', () => {
      assert.isOk(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'div'));
    });
  });
});
