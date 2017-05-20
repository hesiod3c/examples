import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs } from '@kadira/storybook-addon-knobs';

import Footer from './index';

const stories = storiesOf('Footer', module);

stories.addDecorator(withKnobs);

stories.addWithInfo('Normal', () => (
  <Footer />
));
