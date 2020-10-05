import React from 'react';
import { ButtonExample } from '../src';

export default {
  title: 'ButtonExample',
  component: ButtonExample,
};

const Template = (args) => (
  <ButtonExample
    {...args}
  />
);

export const Primary = Template.bind({
});
Primary.args = {
  text: 'Hello World',
};
