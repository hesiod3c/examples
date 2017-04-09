'use strict';

require('../../../../internals/test/helper');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _interface = require('../../interface');

var _interface2 = _interopRequireDefault(_interface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = _interface2.default.styles.breadcrumb;

/** @test {Breadcrumb} */
describe('Breadcrumb component', function () {
  /** @test {Breadcrumb#render} */
  describe('#render', function () {
    var instance = ReactTestUtils.renderIntoDocument(React.createElement(
      _index2.default,
      null,
      React.createElement(_index2.default.Item, { text: 'teste 1' })
    ));

    it('Should output a breadcrumb with one item', function () {
      assert.isOk(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'ol'));
    });

    it('Should output a breadcrumb with default style', function () {
      assert.isOk(ReactDOM.findDOMNode(instance).className.match(styles['breadcrumb-list']));
    });
  });

  /** @test {Breadcrumb#Item} */
  describe('#Item', function () {
    var instance = ReactTestUtils.renderIntoDocument(React.createElement(
      _index2.default,
      null,
      React.createElement(_index2.default.Item, { text: 'test 1', url: 'url test' }),
      React.createElement(_index2.default.Item, { text: 'test 2' })
    ));

    it('Should output a alert with items', function () {
      var breadcrumbItem = ReactTestUtils.scryRenderedComponentsWithType(instance, _index2.default.Item);
      assert.equal(breadcrumbItem.length, 2);
    });

    it('Should output a breadcrumb item with link type', function () {
      var breadcrumbItem = ReactTestUtils.scryRenderedComponentsWithType(instance, _index2.default.Item);
      assert.equal(breadcrumbItem[0].props.text, 'test 1');
      assert.equal(breadcrumbItem[0].props.url, 'url test');
      assert.isOk(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'a'));
    });

    it('Should output a breadcrumb item with text', function () {
      var breadcrumbItem = ReactTestUtils.scryRenderedComponentsWithType(instance, _index2.default.Item);
      assert.equal(breadcrumbItem[1].props.text, 'test 2');
      assert.isOk(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'strong'));
    });
  });
});