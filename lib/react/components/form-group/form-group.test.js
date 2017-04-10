'use strict';

require('../../../../internals/test/helper');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _interface = require('../../interface');

var _interface2 = _interopRequireDefault(_interface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = _interface2.default.styles.formGroup;

/** @test {FormGroup} */
describe('FormGroup component', function () {
  /** @test {FormGroup#render} */
  describe('#render', function () {
    var instance = ReactTestUtils.renderIntoDocument(React.createElement(_index2.default, null));

    it('Should output a form group', function () {
      assert.isOk(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'div'));
    });

    it('Should output a form group with default style', function () {
      assert.isOk(ReactDOM.findDOMNode(instance).className.match(styles['form-group']));
    });
  });
});