import React from 'react';
import infoAddon from '@storybook/addon-info';
import { configure, setAddon, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

import "../../../shared/scss/style.scss";
import styles from "../../../shared/scss/07-pages/storybook.scss";

addDecorator((fn, { kind, story }) => <div className={styles.container}>
  <header className={styles.header}>
    <h1 className={styles.title}>{kind}</h1>
    <h2 className={styles.subtitle}>{story}</h2>
  </header>
  <div className={styles.body}>
    {fn()}
  </div>
  <div className={styles.footer}>
    Click the "?" mark at top-right to view the info.
  </div>
</div>);

setOptions({
  name: 'Blacksmith',
  url: '',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: true
});
setAddon(infoAddon);

function loadStories () {
  const req = require.context('../../../shared/', true, /\.story\.js$/);
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
