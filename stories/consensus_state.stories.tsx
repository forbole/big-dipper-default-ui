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
  title: 'Consensus State',
  height: '2,769,405',
  proposer: 'Forbole',
  votingPowerPerentage: 85,
  round: 0,
  step: 6,
};
