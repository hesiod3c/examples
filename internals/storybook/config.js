import { configure, setAddon } from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';
import { setOptions } from '@kadira/storybook-addon-options';

import "../../shared/scss/style.scss";
import "../../shared/scss/07-pages/storybook.scss";

setAddon(infoAddon);

setOptions({
  name: 'Blacksmith',
  downPanelInRight: true
});

function loadStories () {
  const req = require.context('../../shared/', true, /\.story\.js$/);
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
