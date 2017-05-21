'use strict';

require('../../../../../internals/test/helper');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {};

/** @test {Tag} */

describe('Tag component', function () {
  /** @test {Tag#render} */
  describe('#render', function () {
    var instance = ReactTestUtils.renderIntoDocument(React.createElement(
      _index2.default,
      null,
      'Test'
    ));

    it('Should output a tag', function () {
      assert.isOk(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'div'));
    });

    it('Should output a tag with default style', function () {
      assert.isOk(ReactDOM.findDOMNode(instance).className.match(styles.tag));
    });
  });
});