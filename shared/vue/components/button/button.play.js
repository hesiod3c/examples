import Vue from 'vue';
import { play } from 'vue-play';
import Button from './button-component.vue';

Vue.component('Button', Button);

play('Button')
  .add('Normal', {
    template: `<Button type="default">text</Button>`
  });
