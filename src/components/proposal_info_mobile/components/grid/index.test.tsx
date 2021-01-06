import React from 'react';
import { mount } from 'enzyme';
import Grid from '.';

describe('Grid', () => {
  it('Works', () => {
    expect(Grid).toBeTruthy();
    const wrap = mount(
      <Grid
        label={{
          id: 'Proposal ID',
          proposer: 'Proposer',
          type: 'Type',
          title: 'Title',
          description: 'Description',
          deposit: 'Deposit',
          status: 'Status',
          submittedTime: 'Submitted Time',
          depositEndTime: 'Deposit End Time',
          votingStartTime: 'Voting Start Time',
          votingEndTime: 'Voting End Time',
        }}
        data={{
          id: '01',
          proposer: <div>Forbole</div>,
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
          deposit: '520 ATOM',
        }}
      />,
    );
    expect(wrap).not.toBeNull();
    expect(wrap.find('.label').first().text()).toEqual('Proposal ID');
    expect(wrap.find('.displayContent').first().text()).toEqual('#01');
    expect(wrap.find(Grid)).toHaveLength(1);
  });
});
