import React from 'react';
import { mount } from 'enzyme';
import ProposalResultDesktop from '.';

describe('ProposalResultDesktop', () => {
  it('Works', () => {
    expect(ProposalResultDesktop).toBeTruthy();
    const args = {
      chart: {
        subTitle: 'Voted (43.78%)',
        title: '81,674,736.604642 ATOM',
        amount: '(~81M of ~186M ATOM)',
        colors: ['#28C989', '#1C86FC', '#FD248C', '#FD7522'],
        data: [
          {
            title: 'Yes',
            percentage: '30.66%',
            value: 2504158159222,
            amount: '25,041,581,559222',
          },
          {
            title: 'Abstain',
            percentage: '0.05%',
            value: 3504158159222,
            amount: '3,504,158,159,222',
          },
          {
            title: 'No',
            percentage: '69.28%',
            value: 2504158159222,
            amount: '2,504,158,159,222',
          },
          {
            title: 'No with Veto',
            percentage: '0.00%',
            value: 58159222000,
            amount: '58,159,222,000',
          },
        ],
      },
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
    };
    const wrap = mount(
      <ProposalResultDesktop
        {...args}
      />,
    );
    expect(wrap).not.toBeNull();
    expect(wrap.find(ProposalResultDesktop)).toHaveLength(1);
  });
});
