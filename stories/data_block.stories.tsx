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
  duration: 'Last 7 hours',
  value: '15,000',
};
