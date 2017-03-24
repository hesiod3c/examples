import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs } from '@kadira/storybook-addon-knobs';

import ChoiceBox from './index';

const stories = storiesOf('ChoiceBox', module);

stories.addDecorator(withKnobs);

stories.addWithInfo('Normal', () => (
<ChoiceBox />
));
