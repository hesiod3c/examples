import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { decorateAction } from '@kadira/storybook-addon-actions'
import { withKnobs } from '@kadira/storybook-addon-knobs';

import Dropdown from './index';

const stories = storiesOf('Dropdown', module);

stories.addDecorator(withKnobs);

stories.addWithInfo('Normal',
  `
  This is the basic usage.
  `,
  () => (
    <div>
      <Dropdown />
    </div>
 ));
