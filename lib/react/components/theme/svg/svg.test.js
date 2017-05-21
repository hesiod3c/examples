'use strict';

require('../../../../../internals/test/helper');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @test {Svg} */
describe('Svg component', function () {
  /** @test {Svg#render} */
  describe('#render', function () {
    var instance = ReactTestUtils.renderIntoDocument(React.createElement(_index2.default, null));

    it('Should output a svg', function () {
      assert.isOk(ReactTestUtils.scryRenderedDOMComponentsWithTag(instance, 'svg'));
    });
  });
});