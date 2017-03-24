import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs } from '@kadira/storybook-addon-knobs';

import Tag from './index';

const stories = storiesOf('Tag', module);

stories.addDecorator(withKnobs);

stories.addWithInfo('Normal', () => (
  <Tag onRemove={action('removed')}>name</Tag>
));

