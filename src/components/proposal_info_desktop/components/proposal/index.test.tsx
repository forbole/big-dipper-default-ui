import React from 'react';
import { mount } from 'enzyme';
import ProposalList from '.';

describe('ProposalList', () => {
  it('Works', () => {
    expect(ProposalList).toBeTruthy();
    const wrap = mount(
      <ProposalList
        data={{
          id: '01',
          proposer: <div>forbole</div>,
          title: 'Are Validators Charging 0% Commission Harmful to the Success of the Cosmos Hub?',
          submittedTime: '12 Dec 2019, 16:22:11 UTC',
          depositEndTime: '26 Dec 2019, 16:22:11 UTC',
          votingStartTime: '26 Dec 2019, 16:22:11 UTC',
          votingEndTime: '10 Jan 2020, 16:22:11 UTC',
          status: {
            current: true,
            display: 'Vote',
          },
          duration: '(In 12 days)',
        }}
        label={{
          proposer: 'Proposer',
          submittedTime: 'Submitted Time',
          depositEndTime: 'Deposit End Time',
          votingStartTime: 'Voting Start Time',
          votingEndTime: 'Voting End Time',
        }}
      />,
    );
    expect(wrap).not.toBeNull();
    expect(wrap.find('.title').first().text()).toEqual('Are Validators Charging 0% Commission Harmful to the Success of the Cosmos Hub?');
    // expect(wrap.find('.deposit').first().text()).toEqual('Deposit End Time');
    // expect(wrap.find('.voting').first().text()).toEqual('Voting End Time');
    expect(wrap.find('.days').first().text()).toEqual('(In 12 days)');
    expect(wrap.find(ProposalList)).toHaveLength(1);
  });
});
