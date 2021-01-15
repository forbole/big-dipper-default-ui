import React from 'react';
import { mount } from 'enzyme';
import Consensus from '.';
import { Props } from './types';

describe('Consensus', () => {
  it('Works with base props', () => {
    expect(Consensus).toBeTruthy();
    const args:Props = {
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
        display: '85 %',
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
      <Consensus
        {...args}
      />,
    );
    expect(wrap).not.toBeNull();
    expect(wrap.find('h1').first().text()).toBe('Consensus State');
    expect(wrap.find('h4').first().text()).toBe('Height');
    expect(wrap.find('h4').last().text()).toBe('Voting Power');
  });
});
