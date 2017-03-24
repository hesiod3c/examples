import React from 'react';
import { storiesOf, action } from '@kadira/storybook';

import Alert from './index';

const stories = storiesOf('Alert', module);

stories.addWithInfo('Normal', () => (
  <div>
    <Alert>
      <p> Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.</p>
    </Alert>

    <Alert type="success">
      <p> Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.</p>
    </Alert>

    <Alert type="warning">
      <p> Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.</p>
    </Alert>

    <Alert type="danger">
      <p> Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.</p>
    </Alert>
  </div>
));

stories.addWithInfo('Dark', () => (
  <div>
    <Alert dark>
      <p> Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.</p>
    </Alert>

    <Alert dark type="success">
      <p> Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.</p>
    </Alert>

    <Alert dark type="warning">
      <p> Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.</p>
    </Alert>

    <Alert dark type="danger">
      <p> Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.</p>
    </Alert>
  </div>
));

stories.addWithInfo('Dark with headline and icon', () => (
  <div>
    <Alert dark headline="Info" onDismiss={action('removed')} showIcon>
      <p> Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.</p>
    </Alert>

    <Alert dark headline="Success" onDismiss={action('removed')} showIcon type="success">
      <p> Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.</p>
    </Alert>

    <Alert dark headline="Warning" onDismiss={action('removed')} showIcon type="warning">
      <p> Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.</p>
    </Alert>

    <Alert dark headline="Danger" onDismiss={action('removed')} showIcon type="danger">
      <p> Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.</p>
    </Alert>
  </div>
));

stories.addWithInfo('With headline', () => (
  <div>
    <Alert headline="Info">
      <p> Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.</p>
    </Alert>

    <Alert headline="Success" type="success">
      <p> Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.</p>
    </Alert>

    <Alert headline="Warning" type="warning">
      <p> Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.</p>
    </Alert>

    <Alert headline="Danger" type="danger">
      <p> Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.</p>
    </Alert>
  </div>
));

stories.addWithInfo('With dismiss', () => (
  <div>
    <Alert onDismiss={action('removed')}>
      <p> Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.</p>
    </Alert>

    <Alert type="success" onDismiss={action('removed')}>
      <p> Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.</p>
    </Alert>

    <Alert type="warning" onDismiss={action('removed')}>
      <p> Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.</p>
    </Alert>

    <Alert type="danger" onDismiss={action('removed')}>
      <p> Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.</p>
    </Alert>
  </div>
));

stories.addWithInfo('With icon', () => (
  <div>
    <Alert showIcon>
      <p> Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.</p>
    </Alert>

    <Alert type="success" showIcon>
      <p> Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.</p>
    </Alert>

    <Alert type="warning" showIcon>
      <p> Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.</p>
    </Alert>

    <Alert type="danger" showIcon>
      <p> Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.</p>
    </Alert>
  </div>
));

stories.addWithInfo('With headline and dismiss', () => (
  <div>
    <Alert headline="Info" onDismiss={action('removed')}>
      <p> Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.</p>
    </Alert>

    <Alert headline="Success" type="success" onDismiss={action('removed')}>
      <p> Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.</p>
    </Alert>

    <Alert headline="Warning" type="warning" onDismiss={action('removed')}>
      <p> Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.</p>
    </Alert>

    <Alert headline="Danger" type="danger" onDismiss={action('removed')}>
      <p> Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.</p>
    </Alert>
  </div>
));

stories.addWithInfo('With headline and icon', () => (
  <div>
    <Alert headline="Info" showIcon>
      <p> Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.</p>
    </Alert>

    <Alert headline="Success" type="success" showIcon>
      <p> Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.</p>
    </Alert>

    <Alert headline="Warning" type="warning" showIcon>
      <p> Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.</p>
    </Alert>

    <Alert headline="Danger" type="danger" showIcon>
      <p> Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.</p>
    </Alert>
  </div>
));

stories.addWithInfo('With headline, dismiss and icon', () => (
  <div>
    <Alert headline="Info" onDismiss={action('removed')} showIcon>
      <p> Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.</p>
    </Alert>

    <Alert headline="Success" type="success" onDismiss={action('removed')} showIcon>
      <p> Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.</p>
    </Alert>

    <Alert headline="Warning" type="warning" onDismiss={action('removed')} showIcon>
      <p> Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.</p>
    </Alert>

    <Alert headline="Danger" type="danger" onDismiss={action('removed')} showIcon>
      <p> Maecenas ipsum velit, consectetuer eu. Morbi imperdiet, mauris ac auctor dictum, sem purus in lacus.</p>
    </Alert>
  </div>
));
