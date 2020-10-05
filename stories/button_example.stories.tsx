import React from 'react';
import { ExampleComponent } from '../src';

export default {
  title: 'ExampleComponent',
  component: ExampleComponent,
};

const Template = (args) => (
  <ExampleComponent
    {...args}
  />
);

export const Default = Template.bind({
});
Default.args = {
  text: 'Hello World',
};
