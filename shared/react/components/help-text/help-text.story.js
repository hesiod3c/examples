import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs } from '@kadira/storybook-addon-knobs';

import HelpText from './index';

const stories = storiesOf('HelpText', module);

stories.addDecorator(withKnobs);

stories.addWithInfo('Normal', () => (
  <div>
    <HelpText>Example</HelpText>
  </div>
));
