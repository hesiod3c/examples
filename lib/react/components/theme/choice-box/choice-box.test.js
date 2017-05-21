'use strict';

require('../../../../../internals/test/helper');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {};

/** @test {ChoiceBox} */

describe('ChoiceBox component', function () {
  /** @test {ChoiceBox#render} */
  describe('#render', function () {
    var noOp = function noOp() {};
    var instance = ReactTestUtils.renderIntoDocument(React.createElement(_index2.default, {
      header: 'Op\xE7\xF5es',
      description: 'v\xE1rias op\xE7\xF5es',
      placeholder: 'Cadastre ou busque a op\xE7\xE3o',
      onClick: noOp,
      options: [{ name: 'label 1', slug: 'label-1', checked: true }, { name: 'label 2', slug: 'label-2' }],
      tags: ['label-1'],
      onToggle: noOp,
      onRemove: noOp,
      onDelete: noOp,
      onInputChange: noOp,
      allowCreate: true,
      allowDelete: true
    }));

    it('Should output a choice box', function () {
      var divs = ReactTestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
      assert.equal(divs.length, 8);
    });

    it('Should output a choice box with default style', function () {
      assert.isOk(ReactDOM.findDOMNode(instance).className.match(styles['choiceBox']));
    });
  });
});