'use strict';

require('../../../../internals/test/helper');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

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

  /** @test {Alert#style} */
  describe('#style', function () {
    it('Should have a alert with success style', function () {
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

    it('Should have a alert with warning style', function () {
      var instance = ReactTestUtils.renderIntoDocument(React.createElement(
        _index2.default,
        { type: 'warning' },
        React.createElement(
          'p',
          null,
          'Teste'
        )
      ));
      assert.isOk(ReactDOM.findDOMNode(instance).className.match(styles.warning));
    });

    it('Should have a alert with danger style', function () {
      var instance = ReactTestUtils.renderIntoDocument(React.createElement(
        _index2.default,
        { type: 'danger' },
        React.createElement(
          'p',
          null,
          'Teste'
        )
      ));
      assert.isOk(ReactDOM.findDOMNode(instance).className.match(styles.danger));
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
      var icon = ReactTestUtils.scryRenderedComponentsWithType(instance, _icon2.default);
      assert.equal(icon.length, 1);
    });

    it('Should have className', function () {
      assert.isOk(ReactDOM.findDOMNode(instance).className.match(styles['alert--icon']));
    });

    it('Should output a alert with icon and default style', function () {
      var icon = ReactTestUtils.findRenderedComponentWithType(instance, _icon2.default);
      assert.equal(icon.props.name, 'info-circle');
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