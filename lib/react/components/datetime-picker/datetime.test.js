'use strict';

require('../../../../internals/test/helper');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _interface = require('../../interface');

var _interface2 = _interopRequireDefault(_interface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = _interface2.default.styles.datetimePicker;

/** @test {DatetimePicker} */
describe('DatetimePicker component', function () {
  /** @test {DatetimePicker#render} */
  describe('#render', function () {
    var instance = ReactTestUtils.renderIntoDocument(React.createElement(_index2.default, {
      dateFormat: 'DD/MM/YYYY',
      timeFormat: 'H:mm',
      locale: 'pt-br'
    }));

    it('Should output a datetime picker', function () {
      var divs = ReactTestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
      assert.equal(divs.length, 4);
    });

    it('Should output a button with default style', function () {
      assert.isOk(ReactDOM.findDOMNode(instance).className.match(styles.rdt));
    });
  });
});