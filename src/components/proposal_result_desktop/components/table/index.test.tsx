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
              className: 'yes',
              rawValue: 'yes',
              display: 'Yes',
            },
          },
        ],
        columns: [
          {
            label: 'validator',
            display: 'Voter',
            sort: true,
          },
          {
            label: 'votingPower',
            display: 'Voting Power',
            align: 'right',
            sort: true,
          },
          {
            label: 'votingPowerPercentage',
            display: 'Voting Power %',
            align: 'right',
            sort: true,
          },
          {
            label: 'votingPowerOverride',
            display: 'Voting Power Override',
            align: 'right',
            sort: true,
          },
          {
            label: 'answer',
            display: 'Answer',
            align: 'right',
            sort: true,
          },
        ],
        absenceColumns: [
          {
            label: 'validator',
            display: 'Validator',
            sort: true,
          },
          {
            label: 'votingPower',
            display: 'Voting Power',
            align: 'right',
            sort: true,
          },
          {
            label: 'votingPowerPercentage',
            display: 'Voting Power %',
            align: 'right',
            sort: true,
          },
          {
            label: 'answer',
            display: 'Status',
            align: 'right',
            sort: true,
          },
        ],
        initialActiveSort: 'validator',
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
    expect(wrap.find('.label__validator').first().text()).toEqual('Voter');
    expect(wrap.find(ProposalTable)).toHaveLength(1);
  });
});
