'use strict';

require('../../../../internals/test/helper');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _svg = require('../svg');

var _svg2 = _interopRequireDefault(_svg);

var _interface = require('../../interface');

var _interface2 = _interopRequireDefault(_interface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = _interface2.default.styles.alert;

/** @test {Alert} */
describe('Alert component', function () {
  /** @test {Alert#render} */
  describe('#render', function () {
    var instance = ReactTestUtils.renderIntoDocument(React.createElement(
      _index2.default,
      null,
      React.createElement(
        'p',
        null,
        'Teste'
      )
    ));

    it('Should output a alert with message', function () {
      assert.isOk(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'p'));
    });

    it('Should output a alert with default style', function () {
      assert.isOk(ReactDOM.findDOMNode(instance).className.match(styles.info));
    });
  });

  /** @test {Alert#icon} */
  describe('#icon', function () {
    it('Should have className', function () {
      var instance = ReactTestUtils.renderIntoDocument(React.createElement(
        _index2.default,
        { type: 'success' },
        React.createElement(
          'p',
          null,
          'Teste'
        )
      ));
      assert.isOk(ReactDOM.findDOMNode(instance).className.match(styles.success));
    });
  });

  /** @test {Alert#icon} */
  describe('#icon', function () {
    var instance = ReactTestUtils.renderIntoDocument(React.createElement(
      _index2.default,
      { showIcon: true },
      React.createElement(
        'p',
        null,
        'Teste'
      )
    ));

    it('Should output a alert with icon', function () {
      var icon = ReactTestUtils.scryRenderedComponentsWithType(instance, _svg2.default);
      assert.equal(icon.length, 1);
    });

    it('Should have className', function () {
      assert.isOk(ReactDOM.findDOMNode(instance).className.match(styles['alert--icon']));
    });

    it('Should output a alert with icon and default style', function () {
      var icon = ReactTestUtils.findRenderedComponentWithType(instance, _svg2.default);
      assert.equal(icon.props.name, 'icon/info-circle');
    });
  });

  /** @test {Alert#dismiss} */
  describe('#dismiss', function () {
    var noOp = function noOp() {};
    var instance = ReactTestUtils.renderIntoDocument(React.createElement(
      _index2.default,
      { onDismiss: noOp },
      React.createElement(
        'p',
        null,
        'Teste'
      )
    ));

    it('Should output a alert with onDismiss', function () {
      assert.isOk(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'button'));
    });

    it('Should have dismissable style with onDismiss', function () {
      assert.isOk(ReactDOM.findDOMNode(instance).className.match(styles.dismissable));
    });
  });

  /** @test {Alert#dark} */
  describe('#dark', function () {
    var instance = ReactTestUtils.renderIntoDocument(React.createElement(
      _index2.default,
      { dark: true },
      React.createElement(
        'p',
        null,
        'Teste'
      )
    ));

    it('Should have dark style', function () {
      assert.isOk(ReactDOM.findDOMNode(instance).className.match(styles['alert--dark']));
    });
  });

  /** @test {Alert#action} */
  describe('#action', function () {
    it('Should call onDismiss callback on dismiss click', function (done) {
      var doneOp = function doneOp() {
        done();
      };
      var instance = ReactTestUtils.renderIntoDocument(React.createElement(
        _index2.default,
        { onDismiss: doneOp },
        React.createElement(
          'p',
          null,
          'Message'
        )
      ));
      ReactTestUtils.Simulate.click(ReactDOM.findDOMNode(instance).children[0]);
    });
  });

  /** @test {Alert#headline} */
  describe('#headline', function () {
    var instance = ReactTestUtils.renderIntoDocument(React.createElement(
      _index2.default,
      { headline: 'Teste' },
      React.createElement(
        'p',
        null,
        'Testando'
      )
    ));

    it('Should output a alert with headline', function () {
      assert.isOk(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'h4'));
    });
  });
});