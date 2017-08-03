import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs } from '@storybook/addon-knobs';

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

