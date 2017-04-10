'use strict';

require('../../../../internals/test/helper');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _interface = require('../../interface');

var _interface2 = _interopRequireDefault(_interface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = _interface2.default.styles.suggestions;

/** @test {Suggestions} */
describe('Suggestions component', function () {
  /** @test {Suggestions#render} */
  describe('#render', function () {
    var suggestions = [{ id: 1, name: "test_1" }, { id: 2, name: "example_2" }, { id: 3, name: "example_3" }, { id: 4, name: "test_4" }, { id: 5, name: "example_5" }, { id: 6, name: "example_6" }, { id: 7, name: "teste_7" }, { id: 8, name: "example_8" }, { id: 9, name: "example_9" }, { id: 10, name: "example_10" }];

    var instance = ReactTestUtils.renderIntoDocument(React.createElement(_index2.default, {
      listboxId: 'reactTags-listbox',
      expandable: true,
      suggestions: suggestions,
      query: 'example',
      addTag: function addTag() {},
      maxSuggestionsLength: 6
    }));

    it('Should output a suggestion', function () {
      var divs = ReactTestUtils.scryRenderedDOMComponentsWithTag(instance, 'ul');
      assert.equal(divs.length, 1);
    });

    it('Should output a suggestion with default style', function () {
      assert.isOk(ReactDOM.findDOMNode(instance).className.match(styles.suggestions));
    });
  });
});