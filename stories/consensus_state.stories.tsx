import React from 'react';
import { Consensus } from '../src';

export default {
  title: 'ConsensusState',
  component: Consensus,
};

const Template = (args) => (
  <Consensus
    {...args}
  />
);
export const Default = Template.bind({
});

Default.args = {
  data: [{ name: '1', value: 184136.334 }, { name: '2', value: 7099.13997 }],
  info: { price: 2.75, inflation: 7.01, marketCap: 515551195.53, communityPool: 370536.4747 },
};
