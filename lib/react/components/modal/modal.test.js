'use strict';

require('../../../../internals/test/helper');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _interface = require('../../interface');

var _interface2 = _interopRequireDefault(_interface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = _interface2.default.styles.modal;

/** @test {Modal} */
describe('Modal component', function () {
  /** @test {Modal#render} */
  describe('#render', function () {
    var body = function body() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'strong',
          null,
          'ALIBABA'
        ),
        React.createElement(
          'em',
          null,
          'NADA'
        ),
        React.createElement(
          'span',
          null,
          '\xC9'
        )
      );
    };

    var button = function button() {
      return React.createElement(
        'div',
        null,
        'Ok'
      );
    };

    var modal = {
      id: '' + new Date().getTime(),
      header: 'Termos',
      body: body(),
      footer: true,
      actionButton: button()
    };

    var instance = ReactTestUtils.renderIntoDocument(React.createElement(_index2.default, { data: modal }));

    it('Should output a modal with body', function () {
      var divs = ReactTestUtils.scryRenderedDOMComponentsWithTag(instance, 'div');
      assert.equal(divs.length, 6);
    });

    it('Should output a modal with default style', function () {
      assert.isOk(ReactDOM.findDOMNode(instance).className.match(styles.overlay));
    });
  });
});