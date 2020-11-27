import React from 'react';
import { mount } from 'enzyme';
import ConsensusState from '.';

describe('ConsensusState', () => {
  it('Works with base props', () => {
    expect(ConsensusState).toBeTruthy();
    const args = {
      title: 'Consensus State',
      height: {
        title: 'Height',
        display: '2,769,405',
      },
      proposer: {
        title: 'Proposer',
        display: <div>forbole</div>,
      },
      votingPower: {
        title: 'Voting Power',
        value: 0.85,
      },
      colors: ['#FD3B4C', '#E8E8E8'],
      round: {
        title: 'Round',
        display: '6',
      },
      step: {
        title: 'Step',
        display: '4',
      },
    };
    const wrap = mount(
      <ConsensusState
        {...args}
      />,
    );
    expect(wrap).not.toBeNull();
    expect(wrap.find('h1').first().text()).toBe('Consensus State');
    expect(wrap.find('h4').first().text()).toBe('Height');
    expect(wrap.find('h4').last().text()).toBe('Voting Power');
  });
});
