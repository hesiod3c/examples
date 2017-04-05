import React from 'react';
import { storiesOf } from '@kadira/storybook';
import { withKnobs } from '@kadira/storybook-addon-knobs';

import SvgIcon from './index';

const stories = storiesOf('SvgIcon', module);

stories.addDecorator(withKnobs);

stories.addWithInfo('Normal', () => (
  <div>
    <SvgIcon />
    <SvgIcon name="bars" />
    <SvgIcon name="arrows-alt" />
    <SvgIcon name="close" />
    <SvgIcon name="search" />
    <SvgIcon name="sort-desc" />
    <SvgIcon name="sort-asc" />
    <SvgIcon name="cog" />
    <SvgIcon name="book" />
    <SvgIcon name="image" />
    <SvgIcon name="table" />
    <SvgIcon name="plus" />
    <SvgIcon name="copy" />
    <SvgIcon name="pause" />
    <SvgIcon name="play" />
    <SvgIcon name="edit" />
    <SvgIcon name="trash" />
    <SvgIcon name="hourglass-2" />
    <SvgIcon name="chain" />
    <SvgIcon name="question" />
    <SvgIcon name="tag" />
    <SvgIcon name="th" />
    <SvgIcon name="home" />
    <SvgIcon name="warning" />
    <SvgIcon name="check" />
    <SvgIcon name="exit" />
    <SvgIcon name="info-circle" />
    <SvgIcon name="shield" />
    <SvgIcon name="calendar" />
  </div>
));

stories.addWithInfo('Size', () => (
  <div>
    <SvgIcon size="4rem" />
    <SvgIcon size="4rem" name="bars" />
    <SvgIcon size="4rem" name="arrows-alt" />
    <SvgIcon size="4rem" name="close" />
    <SvgIcon size="4rem" name="search" />
    <SvgIcon size="4rem" name="sort-desc" />
    <SvgIcon size="4rem" name="sort-asc" />
    <SvgIcon size="4rem" name="cog" />
    <SvgIcon size="4rem" name="book" />
    <SvgIcon size="4rem" name="image" />
    <SvgIcon size="4rem" name="table" />
    <SvgIcon size="4rem" name="plus" />
    <SvgIcon size="4rem" name="copy" />
    <SvgIcon size="4rem" name="pause" />
    <SvgIcon size="4rem" name="play" />
    <SvgIcon size="4rem" name="edit" />
    <SvgIcon size="4rem" name="trash" />
    <SvgIcon size="4rem" name="hourglass-2" />
    <SvgIcon size="4rem" name="chain" />
    <SvgIcon size="4rem" name="question" />
    <SvgIcon size="4rem" name="tag" />
    <SvgIcon size="4rem" name="th" />
    <SvgIcon size="4rem" name="home" />
    <SvgIcon size="4rem" name="warning" />
    <SvgIcon size="4rem" name="check" />
    <SvgIcon size="4rem" name="exit" />
    <SvgIcon size="4rem" name="info-circle" />
    <SvgIcon size="4rem" name="shield" />
    <SvgIcon size="4rem"  name="calendar" />
  </div>
));

stories.addWithInfo('Color', () => (
  <div>
    <SvgIcon color='#ffcc00' />
    <SvgIcon color="#ffcc00" name="bars" />
    <SvgIcon color="#ffcc00" name="arrows-alt" />
    <SvgIcon color="#ffcc00" name="close" />
    <SvgIcon color="#ffcc00" name="search" />
    <SvgIcon color="#ffcc00" name="sort-desc" />
    <SvgIcon color="#ffcc00" name="sort-asc" />
    <SvgIcon color="#ffcc00" name="cog" />
    <SvgIcon color="#ffcc00" name="book" />
    <SvgIcon color="#ffcc00" name="image" />
    <SvgIcon color="#ffcc00" name="table" />
    <SvgIcon color="#ffcc00" name="plus" />
    <SvgIcon color="#ffcc00" name="copy" />
    <SvgIcon color="#ffcc00" name="pause" />
    <SvgIcon color="#ffcc00" name="play" />
    <SvgIcon color="#ffcc00" name="edit" />
    <SvgIcon color="#ffcc00" name="trash" />
    <SvgIcon color="#ffcc00" name="hourglass-2" />
    <SvgIcon color="#ffcc00" name="chain" />
    <SvgIcon color="#ffcc00" name="question" />
    <SvgIcon color="#ffcc00" name="tag" />
    <SvgIcon color="#ffcc00" name="th" />
    <SvgIcon color="#ffcc00" name="home" />
    <SvgIcon color="#ffcc00" name="warning" />
    <SvgIcon color="#ffcc00" name="check" />
    <SvgIcon color="#ffcc00" name="exit" />
    <SvgIcon color="#ffcc00" name="info-circle" />
    <SvgIcon color="#ffcc00" name="shield" />
    <SvgIcon color="#ffcc00" name="calendar" />
  </div>
));
