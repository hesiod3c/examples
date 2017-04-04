'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vuePlay = require('vue-play');

var _buttonComponent = require('./button-component.vue');

var _buttonComponent2 = _interopRequireDefault(_buttonComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.component('Button', _buttonComponent2.default);

(0, _vuePlay.play)('Button').add('Normal', {
  template: '<Button type="default">text</Button>'
});