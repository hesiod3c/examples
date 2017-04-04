'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _storybook = require('@kadira/storybook');

var _index = require('./index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var stories = (0, _storybook.storiesOf)('Alert', module);

stories.addWithInfo('Normal', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _index2.default,
      null,
      _react2.default.createElement(
        'p',
        null,
        ' Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.'
      )
    ),
    _react2.default.createElement(
      _index2.default,
      { type: 'success' },
      _react2.default.createElement(
        'p',
        null,
        ' Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.'
      )
    ),
    _react2.default.createElement(
      _index2.default,
      { type: 'warning' },
      _react2.default.createElement(
        'p',
        null,
        ' Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.'
      )
    ),
    _react2.default.createElement(
      _index2.default,
      { type: 'danger' },
      _react2.default.createElement(
        'p',
        null,
        ' Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.'
      )
    )
  );
});

stories.addWithInfo('Dark', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _index2.default,
      { dark: true },
      _react2.default.createElement(
        'p',
        null,
        ' Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.'
      )
    ),
    _react2.default.createElement(
      _index2.default,
      { dark: true, type: 'success' },
      _react2.default.createElement(
        'p',
        null,
        ' Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.'
      )
    ),
    _react2.default.createElement(
      _index2.default,
      { dark: true, type: 'warning' },
      _react2.default.createElement(
        'p',
        null,
        ' Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.'
      )
    ),
    _react2.default.createElement(
      _index2.default,
      { dark: true, type: 'danger' },
      _react2.default.createElement(
        'p',
        null,
        ' Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.'
      )
    )
  );
});

stories.addWithInfo('Dark with headline and icon', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _index2.default,
      { dark: true, headline: 'Info', onDismiss: (0, _storybook.action)('removed'), showIcon: true },
      _react2.default.createElement(
        'p',
        null,
        ' Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.'
      )
    ),
    _react2.default.createElement(
      _index2.default,
      { dark: true, headline: 'Success', onDismiss: (0, _storybook.action)('removed'), showIcon: true, type: 'success' },
      _react2.default.createElement(
        'p',
        null,
        ' Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.'
      )
    ),
    _react2.default.createElement(
      _index2.default,
      { dark: true, headline: 'Warning', onDismiss: (0, _storybook.action)('removed'), showIcon: true, type: 'warning' },
      _react2.default.createElement(
        'p',
        null,
        ' Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.'
      )
    ),
    _react2.default.createElement(
      _index2.default,
      { dark: true, headline: 'Danger', onDismiss: (0, _storybook.action)('removed'), showIcon: true, type: 'danger' },
      _react2.default.createElement(
        'p',
        null,
        ' Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.'
      )
    )
  );
});

stories.addWithInfo('With headline', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _index2.default,
      { headline: 'Info' },
      _react2.default.createElement(
        'p',
        null,
        ' Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.'
      )
    ),
    _react2.default.createElement(
      _index2.default,
      { headline: 'Success', type: 'success' },
      _react2.default.createElement(
        'p',
        null,
        ' Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.'
      )
    ),
    _react2.default.createElement(
      _index2.default,
      { headline: 'Warning', type: 'warning' },
      _react2.default.createElement(
        'p',
        null,
        ' Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.'
      )
    ),
    _react2.default.createElement(
      _index2.default,
      { headline: 'Danger', type: 'danger' },
      _react2.default.createElement(
        'p',
        null,
        ' Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.'
      )
    )
  );
});

stories.addWithInfo('With dismiss', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _index2.default,
      { onDismiss: (0, _storybook.action)('removed') },
      _react2.default.createElement(
        'p',
        null,
        ' Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.'
      )
    ),
    _react2.default.createElement(
      _index2.default,
      { type: 'success', onDismiss: (0, _storybook.action)('removed') },
      _react2.default.createElement(
        'p',
        null,
        ' Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.'
      )
    ),
    _react2.default.createElement(
      _index2.default,
      { type: 'warning', onDismiss: (0, _storybook.action)('removed') },
      _react2.default.createElement(
        'p',
        null,
        ' Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.'
      )
    ),
    _react2.default.createElement(
      _index2.default,
      { type: 'danger', onDismiss: (0, _storybook.action)('removed') },
      _react2.default.createElement(
        'p',
        null,
        ' Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.'
      )
    )
  );
});

stories.addWithInfo('With icon', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _index2.default,
      { showIcon: true },
      _react2.default.createElement(
        'p',
        null,
        ' Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.'
      )
    ),
    _react2.default.createElement(
      _index2.default,
      { type: 'success', showIcon: true },
      _react2.default.createElement(
        'p',
        null,
        ' Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.'
      )
    ),
    _react2.default.createElement(
      _index2.default,
      { type: 'warning', showIcon: true },
      _react2.default.createElement(
        'p',
        null,
        ' Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.'
      )
    ),
    _react2.default.createElement(
      _index2.default,
      { type: 'danger', showIcon: true },
      _react2.default.createElement(
        'p',
        null,
        ' Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.'
      )
    )
  );
});

stories.addWithInfo('With headline and dismiss', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _index2.default,
      { headline: 'Info', onDismiss: (0, _storybook.action)('removed') },
      _react2.default.createElement(
        'p',
        null,
        ' Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.'
      )
    ),
    _react2.default.createElement(
      _index2.default,
      { headline: 'Success', type: 'success', onDismiss: (0, _storybook.action)('removed') },
      _react2.default.createElement(
        'p',
        null,
        ' Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.'
      )
    ),
    _react2.default.createElement(
      _index2.default,
      { headline: 'Warning', type: 'warning', onDismiss: (0, _storybook.action)('removed') },
      _react2.default.createElement(
        'p',
        null,
        ' Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.'
      )
    ),
    _react2.default.createElement(
      _index2.default,
      { headline: 'Danger', type: 'danger', onDismiss: (0, _storybook.action)('removed') },
      _react2.default.createElement(
        'p',
        null,
        ' Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.'
      )
    )
  );
});

stories.addWithInfo('With headline and icon', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _index2.default,
      { headline: 'Info', showIcon: true },
      _react2.default.createElement(
        'p',
        null,
        ' Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.'
      )
    ),
    _react2.default.createElement(
      _index2.default,
      { headline: 'Success', type: 'success', showIcon: true },
      _react2.default.createElement(
        'p',
        null,
        ' Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.'
      )
    ),
    _react2.default.createElement(
      _index2.default,
      { headline: 'Warning', type: 'warning', showIcon: true },
      _react2.default.createElement(
        'p',
        null,
        ' Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.'
      )
    ),
    _react2.default.createElement(
      _index2.default,
      { headline: 'Danger', type: 'danger', showIcon: true },
      _react2.default.createElement(
        'p',
        null,
        ' Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.'
      )
    )
  );
});

stories.addWithInfo('With headline, dismiss and icon', function () {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _index2.default,
      { headline: 'Info', onDismiss: (0, _storybook.action)('removed'), showIcon: true },
      _react2.default.createElement(
        'p',
        null,
        ' Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.'
      )
    ),
    _react2.default.createElement(
      _index2.default,
      { headline: 'Success', type: 'success', onDismiss: (0, _storybook.action)('removed'), showIcon: true },
      _react2.default.createElement(
        'p',
        null,
        ' Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.'
      )
    ),
    _react2.default.createElement(
      _index2.default,
      { headline: 'Warning', type: 'warning', onDismiss: (0, _storybook.action)('removed'), showIcon: true },
      _react2.default.createElement(
        'p',
        null,
        ' Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.'
      )
    ),
    _react2.default.createElement(
      _index2.default,
      { headline: 'Danger', type: 'danger', onDismiss: (0, _storybook.action)('removed'), showIcon: true },
      _react2.default.createElement(
        'p',
        null,
        ' Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.'
      )
    )
  );
});