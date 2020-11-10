import React from 'react';
import { Statbilities } from '../src';

export default {
  title: 'Statbilities',
  component: Statbilities,
};

const Template = (args) => (
  <Statbilities
    {...args}
  />
);

export const Default = Template.bind({
});

Default.args = {
  data: [{
    name: 'bonded', value: 184136.334,
  },
  {
    name: 'unbonded', value: 7099.13997,
  }],
  info: {
    price: 2.75, inflation: 7.01, marketCap: 515551195.53, communityPool: 370536.4747,
  },
};
