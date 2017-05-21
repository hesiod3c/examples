'use strict';

require('../../../../../internals/test/helper');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {};

/** @test {Pagination} */

describe('Pagination component', function () {
  /** @test {Pagination#render} */
  describe('#render', function () {
    var instance = ReactTestUtils.renderIntoDocument(React.createElement(_index2.default, {
      activePage: 1,
      itemsCountPerPage: 10,
      totalItemsCount: 200
    }));

    it('Should output a pagination', function () {
      assert.isOk(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'ul'));
    });

    it('Should output a pagination with default style', function () {
      assert.isOk(ReactDOM.findDOMNode(instance).className.match(styles.pagination));
    });
  });
});