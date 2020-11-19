import React from 'react';
<<<<<<< HEAD
import { Example } from '../src';

export default {
  title: 'Statbilities',
  component: Example,
};

const Template = (args) => (
  <Example
=======
import { Stabilities } from '../src';

export default {
  title: 'Stabilities',
  component: Stabilities,
};

const Template = (args) => (

  <Stabilities
>>>>>>> 87feeb77fffbf7f05d0a18576748c04d4d23ab35
    {...args}
  />
);

export const Default = Template.bind({
});

Default.args = {
  title: 'Stabilities',
  coin: 'ATOM',
  price: {
    title: 'Price',
    display: '$2.756',
  },
  inflation: {
    title: 'Inflation',
    display: '7.01%',
  },
  marketCap: {
    title: 'Market Cap',
    display: '$515,551,345.666',
  },
  communityPool: {
    title: 'Community Pool',
    display: '370,000.74',
  },
  data: {
    total: {
      value: 191235.473,
      display: '0.19 m',
    },
    detail:
    [{
      title: 'Bonded', value: 100000, display: '100,000.000',
    },
    {
      title: 'UnBonded', value: 91235.473, display: '1,291,235.473',
    },
    ],
  },
  colors: ['#FF7846', '#FFD800'],
};
