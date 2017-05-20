import React from 'react';
import { storiesOf, action } from '@kadira/storybook';
import { withKnobs } from '@kadira/storybook-addon-knobs';

import TagsInput from './tags-input-component';

const stories = storiesOf('TagsInput', module);

stories.addDecorator(withKnobs);

const options = ['aaaa'];

stories.addWithInfo('Normal', () => (
  <TagsInput
    inputProps={{
      placeholder: 'Digite os termos'
    }}
    onChange={action('changed')}
    value={options}
  />
));

