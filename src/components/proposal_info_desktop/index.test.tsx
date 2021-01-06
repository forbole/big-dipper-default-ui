import React from 'react';
import { mount } from 'enzyme';
import ProposalInfoDesktop from '.';

describe('ProposalInfoDesktop', () => {
  it('Works', () => {
    expect(ProposalInfoDesktop).toBeTruthy();
    const wrap = mount(
      <ProposalInfoDesktop
        data={{
          id: '01',
          proposer: <div>forbole</div>,
          title: 'Are Validators Charging 0% Commission Harmful to the Success of the Cosmos Hub?',
          description: 'Lunie Mobile now available in app stores near you! 📲 iOS - bit.ly 📲 Android - bit.ly ❣️This proposal was sent from the Lunie iOS app 😏Lunie Mobile now available in app stores near you! 📲 iOS - bit.ly 📲 Android - bit.ly ❣️This proposal was sent from the Lunie iOS app 😏Lunie Mobile now available in app stores near you! 📲 iOS - bit.ly 📲 Android - bit.ly ❣️This proposal was sent from the Lunie iOS app 😏Lunie Mobile now available in app stores near you! 📲 iOS - bit.ly 📲 Android - bit.ly ❣️This proposal was sent from the Lunie iOS app 😏',
          submittedTime: '12 Dec 2019, 16:22:11 UTC',
          depositEndTime: '26 Dec 2019, 16:22:11 UTC',
          votingStartTime: '26 Dec 2019, 16:22:11 UTC',
          votingEndTime: '10 Jan 2020, 16:22:11 UTC',
          status: {
            current: true,
            display: 'Vote',
          },
          duration: '(In 12 days)',
          type: 'Text proposal',
        }}
        label={{
          proposer: 'Proposer',
          type: 'Type',
          description: 'Description',
          submittedTime: 'Submitted Time',
          depositEndTime: 'Deposit End Time',
          votingStartTime: 'Voting Start Time',
          votingEndTime: 'Voting End Time',
        }}
      />,
    );
    expect(wrap).not.toBeNull();
    expect(wrap.find('.label').find('.type').first().text()).toEqual('Type');
    expect(wrap.find('.cell').find('.type').first().text()).toEqual('Text proposal');
    expect(wrap.find('.days').first().text()).toEqual('(In 12 days)');
    expect(wrap.find(ProposalInfoDesktop)).toHaveLength(1);
  });
});
