import React from 'react';
import { mount } from 'enzyme';
import { BarChart } from 'recharts';
import ValidatorBlocks from '.';

describe('ValidatorBlocks', () => {
  it('Works', () => {
    expect(ValidatorBlocks).toBeTruthy();
    const wrap = mount(
      <ValidatorBlocks
        title="Missed Blocks"
        description="10/10000 (19h)"
        labels={{
          proposer: 'Proposer',
          height: 'Height',
          votingPower: 'Voting Power',
          gas: 'Gas (used/wanted)',
          missed: 'Missed',
          voted: 'Voted',
          yes: 'Yes',
          no: 'No',
          signatures: 'Signatures',
        }}
        legend={{
          missed: '#FD3B4C',
          voted: '#1EC4904D',
        }}
        recharts={{
          gridAspect: 0.85,
        }}
        data={[
          {
            proposer: <div>forbole</div>,
            height: '123,001',
            votingPower: '78%',
            gas: '1,500,794 / 3,000,000',
            voted: false,
            signatures: {
              raw: 100,
              display: '100',
            },
          },
          {
            proposer: <div>forbole</div>,
            height: '123,001',
            votingPower: '78%',
            gas: '1,500,794 / 3,000,000',
            voted: false,
            signatures: {
              raw: 100,
              display: '100',
            },
          },
          {
            proposer: <div>stake fish</div>,
            height: '123,002',
            votingPower: '78%',
            gas: '1,500,794 / 3,000,000',
            voted: true,
            signatures: {
              raw: 86,
              display: '86',
            },
          },
        ]}
      />,
    );
    expect(wrap).not.toBeNull();

    expect(wrap.find('.validator-blocks')).toHaveLength(1);
    expect(wrap.find('.validator-blocks__title')).toHaveLength(1);
    expect(wrap.find('.validator-blocks__title').text()).toEqual('Missed Blocks');
    expect(wrap.find('.validator-blocks__bar-chart')).toHaveLength(1);
    expect(wrap.find(BarChart)).toHaveLength(1);
  });
});
