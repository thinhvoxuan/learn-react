import React from 'react';
import {storiesOf, action, linkTo, setAddon} from '@kadira/storybook'
import infoAddon from '@kadira/react-storybook-addon-info'

setAddon(infoAddon)

storiesOf('Button', module)
  .addWithInfo(
    'with text',
    ``,
    () => (
      <button onClick={action('clicked')}>Hello Button</button>
    )
  )
  .add('with some emoji', () => (
    <button onClick={action('clicked')}>😀 😎 👍 💯</button>
  ));