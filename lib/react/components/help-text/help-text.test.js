'use strict';

require('../../../../internals/test/helper');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _interface = require('../../interface');

var _interface2 = _interopRequireDefault(_interface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = _interface2.default.styles.helpText;

/** @test {HelpText} */
describe('HelpText component', function () {
  /** @test {HelpText#render} */
  describe('#render', function () {
    var instance = ReactTestUtils.renderIntoDocument(React.createElement(
      _index2.default,
      null,
      'Test'
    ));

    it('Should output a help text', function () {
      assert.isOk(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'span'));
    });

    it('Should output a help text with default style', function () {
      assert.isOk(ReactDOM.findDOMNode(instance).className.match(styles['help-text']));
    });
  });
});