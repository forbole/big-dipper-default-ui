import React from 'react';
import { mount } from 'enzyme';
import ProposalTable from '.';

describe('ProposalTable', () => {
  it('Works', () => {
    expect(ProposalTable).toBeTruthy();
    const args = {
      tableDefaultProps: {
        overrideLabel: 'Override',
        data: [
          {
            validator: {
              className: 'validator',
              rawValue: 'forbole',
              display: <div>forbole</div>,
            },
            votingPower: {
              className: 'votingPower',
              rawValue: 4602020.799998,
              display: '4,602,020.799998 ATOM',
            },
            votingPowerPercentage: {
              className: 'votingPowerPercentage',
              rawValue: 77,
              display: '0.77%',
            },
            votingPowerOverride: {
              className: 'votingPowerOverride',
              rawValue: 1.9,
              display: '1.9%',
            },
            answer: {
              className: 'abstain',
              rawValue: 'abstain',
              display: 'Abstain',
            },
          },
        ],
      },
      tabProps: {
        all: 'All votes (60)',
        yes: 'yes (15)',
        no: 'no (43)',
        veto: 'No with veto (0)',
        abstain: 'abstain (2)',
        absence: 'absence (40/100)',
      },
      classNameTab: '',
      classNameIndicator: '',
    };
    const wrap = mount(
      <ProposalTable
        {...args}
      />,
    );
    expect(wrap).not.toBeNull();
    expect(wrap.find(ProposalTable)).toHaveLength(1);
    expect(wrap.find('.votingPowerPercentage').first().text()).toEqual('0.77%');
    expect(wrap.find('.overrideLabel').first().text()).toEqual('Override');
  });
});
