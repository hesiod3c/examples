'use strict';

require('../../../../../internals/test/helper');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {};

/** @test {Image} */

describe('Image component', function () {
  /** @test {Image#render} */
  describe('#render', function () {
    var instance = ReactTestUtils.renderIntoDocument(React.createElement(_index2.default, { path: 'https://placeholdit.imgix.net/~text?txtsize=13&txt=image&w=100&h=100' }));

    it('Should output an image', function () {
      assert.isOk(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'figure'));
    });

    it('Should output an image with default style', function () {
      assert.isOk(ReactDOM.findDOMNode(instance).className.match(styles.left));
    });
  });
});