import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';

import Autocomplete from './autocomplete-component';

const stories = storiesOf('Autocomplete', module);

stories.addDecorator(withKnobs);

const options = [
  { value: 'Red', label: 'Red' },
  { value: 'Green', label: 'Green' },
  { value: 'Blue', label: 'Blue' }
];

stories.addWithInfo('Normal', () => (
  <Autocomplete
    options={options}
    onChange={action('changed')}
    value={text('Value', '')}
  />
));

