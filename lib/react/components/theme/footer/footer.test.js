'use strict';

require('../../../../../internals/test/helper');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @test {Footer} */
describe('Footer component', function () {

  /** @test {Footer#render} */
  describe('#render', function () {
    var instance = ReactTestUtils.renderIntoDocument(React.createElement(_index2.default, null));

    it('Should output a footer', function () {
      assert.isOk(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'footer'));
    });
  });
});