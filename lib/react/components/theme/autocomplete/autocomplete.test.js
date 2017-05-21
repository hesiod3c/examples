'use strict';

require('../../../../../internals/test/helper');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @test {Autocomplete} */
describe('Autocomplete component', function () {
  /** @test {Autocomplete#render} */
  describe('#render', function () {
    var options = [{ value: 'Red', label: 'Red' }, { value: 'Green', label: 'Green' }, { value: 'Blue', label: 'Blue' }];
    var instance = ReactTestUtils.renderIntoDocument(React.createElement(_index2.default, { options: options }));

    it('Should output an autocomplete', function () {
      var divs = ReactTestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
      assert.equal(divs.length, 5);
    });
  });
});