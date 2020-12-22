import React from 'react';
import { mount } from 'enzyme';
import ToolTip from '.';

describe('ToolTip', () => {
  it('Works', () => {
    expect(ToolTip).toBeTruthy();
    const wrap = mount(
      <ToolTip
        active
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
        payload={[{
          payload: {
            proposer: <div>forbole</div>,
            height: '12,333',
            votingPower: '10%',
            gas: 'some gas',
            voted: true,
            signatures: 100,
          },
        }]}
      />,
    );
    expect(wrap).not.toBeNull();

    expect(wrap.find('.tool-tip')).toHaveLength(1);
    expect(wrap.find('.tool-top__single')).toHaveLength(6);
    expect(wrap.find('.single__label')).toHaveLength(6);
  });
});
