import React from 'react';
import { DataBlock } from '../src';

export default {
  title: 'DataBlock',
  component: DataBlock,
};

const Template = (args) => (
  <DataBlock
    {...args}
  />
);

export const Default = Template.bind({
});
Default.args = {
  label: 'Latest Block Height',
  durations: [{
    value: '7_hours',
    display: 'Last 7 hours',
  }],
  value: '15,000',
};

export const MultiDurations = Template.bind({
});
MultiDurations.args = {
  label: 'Latest Block Height',
  durations: [{
    value: '7_hours',
    display: 'Last 7 hours',
  }, {
    value: 24,
    display: '24 hours',
  }],
  value: '15,000',
};
