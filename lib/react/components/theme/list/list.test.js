'use strict';

require('../../../../../internals/test/helper');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {};

/** @test {List} */

describe('List component', function () {
  /** @test {List#render} */
  describe('#render', function () {
    var instance = ReactTestUtils.renderIntoDocument(React.createElement(
      _index2.default,
      null,
      React.createElement(
        _index2.default.Item,
        null,
        'List Item'
      )
    ));

    it('Should output a list with items', function () {
      assert.isOk(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'ul'));
    });

    it('Should output a list with default style', function () {
      assert.isOk(ReactDOM.findDOMNode(instance).className.match(styles.bordered));
    });
  });
});