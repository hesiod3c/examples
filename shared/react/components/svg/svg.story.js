import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs } from '@kadira/storybook-addon-knobs';

import Svg from './index';

const stories = storiesOf('Svg', module);

stories.addDecorator(withKnobs);

stories.addWithInfo('Normal', () => (
  <div>
    <Svg name="logo/acom" />
    <Svg name="logo/suba" />
    <Svg name="logo/shop" />
    <Svg name="logo/soub" />
    <Svg />
    <Svg name="icon/bars" />
    <Svg name="icon/arrows-alt" />
    <Svg name="icon/close" />
    <Svg name="icon/search" />
    <Svg name="icon/sort-desc" />
    <Svg name="icon/sort-asc" />
    <Svg name="icon/cog" />
    <Svg name="icon/book" />
    <Svg name="icon/image" />
    <Svg name="icon/table" />
    <Svg name="icon/plus" />
    <Svg name="icon/copy" />
    <Svg name="icon/pause" />
    <Svg name="icon/play" />
    <Svg name="icon/edit" />
    <Svg name="icon/trash" />
    <Svg name="icon/hourglass-2" />
    <Svg name="icon/chain" />
    <Svg name="icon/question" />
    <Svg name="icon/tag" />
    <Svg name="icon/th" />
    <Svg name="icon/home" />
    <Svg name="icon/warning" />
    <Svg name="icon/check" />
    <Svg name="icon/exit" />
    <Svg name="icon/info-circle" />
    <Svg name="icon/shield" />
    <Svg name="icon/calendar" />
  </div>
));

stories.addWithInfo('Size', () => (
  <div>
    <Svg size="4rem" />
    <Svg size="4rem" name="icon/bars" />
    <Svg size="4rem" name="icon/arrows-alt" />
    <Svg size="4rem" name="icon/close" />
    <Svg size="4rem" name="icon/search" />
    <Svg size="4rem" name="icon/sort-desc" />
    <Svg size="4rem" name="icon/sort-asc" />
    <Svg size="4rem" name="icon/cog" />
    <Svg size="4rem" name="icon/book" />
    <Svg size="4rem" name="icon/image" />
    <Svg size="4rem" name="icon/table" />
    <Svg size="4rem" name="icon/plus" />
    <Svg size="4rem" name="icon/copy" />
    <Svg size="4rem" name="icon/pause" />
    <Svg size="4rem" name="icon/play" />
    <Svg size="4rem" name="icon/edit" />
    <Svg size="4rem" name="icon/trash" />
    <Svg size="4rem" name="icon/hourglass-2" />
    <Svg size="4rem" name="icon/chain" />
    <Svg size="4rem" name="icon/question" />
    <Svg size="4rem" name="icon/tag" />
    <Svg size="4rem" name="icon/th" />
    <Svg size="4rem" name="icon/home" />
    <Svg size="4rem" name="icon/warning" />
    <Svg size="4rem" name="icon/check" />
    <Svg size="4rem" name="icon/exit" />
    <Svg size="4rem" name="icon/info-circle" />
    <Svg size="4rem" name="icon/shield" />
    <Svg size="4rem"  name="icon/calendar" />
  </div>
));

stories.addWithInfo('Color', () => (
  <div>
    <Svg color='#ffcc00' />
    <Svg color="#ffcc00" name="icon/bars" />
    <Svg color="#ffcc00" name="icon/arrows-alt" />
    <Svg color="#ffcc00" name="icon/close" />
    <Svg color="#ffcc00" name="icon/search" />
    <Svg color="#ffcc00" name="icon/sort-desc" />
    <Svg color="#ffcc00" name="icon/sort-asc" />
    <Svg color="#ffcc00" name="icon/cog" />
    <Svg color="#ffcc00" name="icon/book" />
    <Svg color="#ffcc00" name="icon/image" />
    <Svg color="#ffcc00" name="icon/table" />
    <Svg color="#ffcc00" name="icon/plus" />
    <Svg color="#ffcc00" name="icon/copy" />
    <Svg color="#ffcc00" name="icon/pause" />
    <Svg color="#ffcc00" name="icon/play" />
    <Svg color="#ffcc00" name="icon/edit" />
    <Svg color="#ffcc00" name="icon/trash" />
    <Svg color="#ffcc00" name="icon/hourglass-2" />
    <Svg color="#ffcc00" name="icon/chain" />
    <Svg color="#ffcc00" name="icon/question" />
    <Svg color="#ffcc00" name="icon/tag" />
    <Svg color="#ffcc00" name="icon/th" />
    <Svg color="#ffcc00" name="icon/home" />
    <Svg color="#ffcc00" name="icon/warning" />
    <Svg color="#ffcc00" name="icon/check" />
    <Svg color="#ffcc00" name="icon/exit" />
    <Svg color="#ffcc00" name="icon/info-circle" />
    <Svg color="#ffcc00" name="icon/shield" />
    <Svg color="#ffcc00" name="icon/calendar" />
  </div>
));
