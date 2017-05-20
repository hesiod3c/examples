import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs } from '@kadira/storybook-addon-knobs';

import GridCol from './index';

const stories = storiesOf('GridCol', module);

stories.addDecorator(withKnobs);

const style = {
  'backgroundColor': '#ccc',
  'height': '100px'
};

stories.addWithInfo('Normal', () => (
  <GridCol xs={1} style={style}>Grid 1</GridCol>
));

