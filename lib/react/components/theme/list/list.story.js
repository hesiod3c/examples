'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _storybook.storiesOf)('List', module);

stories.addWithInfo('Bordered', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _index2.default,
      { style: 'bordered' },
      _react2.default.createElement(
        _index2.default.Item,
        null,
        _react2.default.createElement(
          'span',
          null,
          'List Item'
        )
      ),
      _react2.default.createElement(
        _index2.default.Item,
        null,
        _react2.default.createElement(
          'span',
          null,
          'List Item'
        )
      ),
      _react2.default.createElement(
        _index2.default.Item,
        null,
        _react2.default.createElement(
          'span',
          null,
          'List Item'
        )
      )
    )
  );
});

stories.addWithInfo('Unstyled', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _index2.default,
      null,
      _react2.default.createElement(
        _index2.default.Item,
        null,
        _react2.default.createElement(
          'span',
          null,
          'List Item'
        )
      ),
      _react2.default.createElement(
        _index2.default.Item,
        null,
        _react2.default.createElement(
          'span',
          null,
          'List Item'
        )
      ),
      _react2.default.createElement(
        _index2.default.Item,
        null,
        _react2.default.createElement(
          'span',
          null,
          'List Item'
        )
      )
    )
  );
});

stories.addWithInfo('WithSubItem', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _index2.default,
      null,
      _react2.default.createElement(
        _index2.default.Item,
        null,
        _react2.default.createElement(
          'span',
          null,
          'List Item (unstyled)'
        )
      ),
      _react2.default.createElement(
        _index2.default.Item,
        null,
        _react2.default.createElement(
          'span',
          null,
          'List Item (unstyled)'
        )
      ),
      _react2.default.createElement(
        _index2.default.Item,
        null,
        _react2.default.createElement(
          'span',
          null,
          'List Item (unstyled)'
        )
      )
    )
  );
});

stories.addWithInfo('Disc', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _index2.default,
      { style: 'disc' },
      _react2.default.createElement(
        _index2.default.Item,
        null,
        _react2.default.createElement(
          'span',
          null,
          'List Item (disc)'
        )
      ),
      _react2.default.createElement(
        _index2.default.Item,
        null,
        _react2.default.createElement(
          'span',
          null,
          'List Item (disc)'
        )
      ),
      _react2.default.createElement(
        _index2.default.Item,
        null,
        _react2.default.createElement(
          'span',
          null,
          'List Item (disc)'
        )
      )
    )
  );
});

stories.addWithInfo('Circle', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _index2.default,
      { style: 'circle' },
      _react2.default.createElement(
        _index2.default.Item,
        null,
        _react2.default.createElement(
          'span',
          null,
          'List Item (circle)'
        )
      ),
      _react2.default.createElement(
        _index2.default.Item,
        null,
        _react2.default.createElement(
          'span',
          null,
          'List Item (circle)'
        )
      ),
      _react2.default.createElement(
        _index2.default.Item,
        null,
        _react2.default.createElement(
          'span',
          null,
          'List Item (circle)'
        )
      )
    )
  );
});

stories.addWithInfo('Decimal', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _index2.default,
      { style: 'decimal' },
      _react2.default.createElement(
        _index2.default.Item,
        null,
        _react2.default.createElement(
          'span',
          null,
          'List Item (decimal)'
        )
      ),
      _react2.default.createElement(
        _index2.default.Item,
        null,
        _react2.default.createElement(
          'span',
          null,
          'List Item (decimal)'
        )
      ),
      _react2.default.createElement(
        _index2.default.Item,
        null,
        _react2.default.createElement(
          'span',
          null,
          'List Item (decimal)'
        )
      )
    )
  );
});

stories.addWithInfo('Zebra', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _index2.default,
      { style: 'zebra' },
      _react2.default.createElement(
        _index2.default.Item,
        null,
        _react2.default.createElement(
          'span',
          null,
          'List Item impar'
        )
      ),
      _react2.default.createElement(
        _index2.default.Item,
        null,
        _react2.default.createElement(
          'span',
          null,
          'List Item par'
        )
      ),
      _react2.default.createElement(
        _index2.default.Item,
        null,
        _react2.default.createElement(
          'span',
          null,
          'List Item impar'
        )
      ),
      _react2.default.createElement(
        _index2.default.Item,
        null,
        _react2.default.createElement(
          'span',
          null,
          'List Item par'
        )
      )
    )
  );
});

stories.addWithInfo('WithSubItem', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _index2.default,
      { style: 'decimal' },
      _react2.default.createElement(
        _index2.default.Item,
        null,
        _react2.default.createElement(
          'span',
          null,
          'List Item (decimal) com Sub Item'
        ),
        _react2.default.createElement(
          _index2.default,
          { style: 'disc' },
          _react2.default.createElement(
            _index2.default.Item,
            null,
            _react2.default.createElement(
              'span',
              null,
              'Sub Item (disc)'
            )
          ),
          _react2.default.createElement(
            _index2.default.Item,
            null,
            _react2.default.createElement(
              'span',
              null,
              'Sub Item (disc)'
            )
          ),
          _react2.default.createElement(
            _index2.default.Item,
            null,
            _react2.default.createElement(
              'span',
              null,
              'Sub Item (disc)'
            )
          )
        )
      ),
      _react2.default.createElement(
        _index2.default.Item,
        null,
        _react2.default.createElement(
          'span',
          null,
          'List Item (decimal) com Sub Item'
        ),
        _react2.default.createElement(
          _index2.default,
          { style: 'circle' },
          _react2.default.createElement(
            _index2.default.Item,
            null,
            _react2.default.createElement(
              'span',
              null,
              'Sub Item (circle)'
            )
          ),
          _react2.default.createElement(
            _index2.default.Item,
            null,
            _react2.default.createElement(
              'span',
              null,
              'Sub Item (circle)'
            )
          ),
          _react2.default.createElement(
            _index2.default.Item,
            null,
            _react2.default.createElement(
              'span',
              null,
              'Sub Item (circle)'
            )
          )
        )
      ),
      _react2.default.createElement(
        _index2.default.Item,
        null,
        _react2.default.createElement(
          'span',
          null,
          'List Item (decimal) com Sub Item'
        ),
        _react2.default.createElement(
          _index2.default,
          { style: 'decimal' },
          _react2.default.createElement(
            _index2.default.Item,
            null,
            _react2.default.createElement(
              'span',
              null,
              'Sub Item (decimal)'
            )
          ),
          _react2.default.createElement(
            _index2.default.Item,
            null,
            _react2.default.createElement(
              'span',
              null,
              'Sub Item (decimal)'
            )
          ),
          _react2.default.createElement(
            _index2.default.Item,
            null,
            _react2.default.createElement(
              'span',
              null,
              'Sub Item (decimal)'
            )
          )
        )
      )
    )
  );
});