import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import { Example } from '../src';
import { ThemeKnob } from './theme_knob';

export default {
  title: 'Statbilities',
  component: Example,
  decorators: [withKnobs],
};

const Template = (args) => (
  <ThemeKnob>
    <Example
      {...args}
    />
  </ThemeKnob>
);
export const Default = Template.bind({
});

Default.args = {
  data: [{ name: '1', value: 184136.334 }, { name: '2', value: 7099.13997 }],
  info: { price: 2.75, inflation: 7.01, marketCap: 515551195.53, communityPool: 370536.4747 },
};
