import React from 'react';
import { mount } from 'enzyme';
import BlockDetails from '.';
import {
  Proposer,
  signatureData,
} from './utils';

describe('BlockDetails', () => {
  it('Works', () => {
    expect(BlockDetails).toBeTruthy();
    const wrap = mount(
      <BlockDetails
        title="Block # 2,768,644"
        txHash={{
          display: 'Tx Hash',
          value: '73FCAFE9BAF19BB405086CFFA1C8FEC510486AFAC5CBD48A2F57A3C79ABA1255',
        }}
        time={{
          display: 'Time',
          value: '10 Jan 2020, 12:59:27 UTC',
        }}
        noTransactions={{
          display: 'No of Transactions',
          value: '1',
        }}
        proposer={{
          display: 'Proposer',
          value: <Proposer />,
        }}
        signedVotingPower={{
          display: 'Signed voting power',
          value: '89%',
        }}
        signatures={{
          display: 'Signatures',
          value: '100 signatures',
          labels: {
            validator: 'Validator',
            votingPower: 'Voting Power',
            votingPowerPercentage: 'Voting Power (Percentage)',
            signStatus: 'Sign Status',
          },
          data: signatureData,
        }}
        desktop={false}
      />,
    );
    expect(wrap).not.toBeNull();
    expect(wrap.find('h1').first().text()).toEqual('Block # 2,768,644');
    expect(wrap.find('.time').find('.displayTitle').first().text()).toEqual('Time');
    expect(wrap.find('.noTransactions').find('.displayTitle').first().text()).toEqual('No of Transactions');
    expect(wrap.find('.signedVotingPower').find('.displayTitle').first().text()).toEqual('Signed voting power');
    expect(wrap.find(BlockDetails)).toHaveLength(1);
  });
});
