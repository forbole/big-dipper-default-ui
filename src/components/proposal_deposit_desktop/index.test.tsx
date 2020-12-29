import React from 'react';
import { mount } from 'enzyme';
import ProposalDepositDesktop from '.';
import AvatarDisplay from '../avatar_display';

describe('ProposalDepositDesktop', () => {
  it('Works', () => {
    expect(ProposalDepositDesktop).toBeTruthy();
    const wrap = mount(
      <ProposalDepositDesktop
        title="Deposits (109.9 ATOM)"
        data={[
          {
            depositor: <AvatarDisplay
              imageUrl="https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg"
              alt="avatar image"
              title="Forbole"
            />,
            amount: '10.8 ATOM',
            time: '09 Jan 2020, 10:00:19',
          },
        ]}
        labels={{
          depositor: 'Depositor',
          amount: 'Amount',
          time: 'Time [UTC]',
        }}
      />,
    );
    expect(wrap).not.toBeNull();
    expect(wrap.find('h1').first().text()).toEqual('Deposits (109.9 ATOM)');
    expect(wrap.find('.label').find('.depositor').first().text()).toEqual('Depositor');
    expect(wrap.find('.label').find('.amount').first().text()).toEqual('Amount');
    expect(wrap.find('.label').find('.time').first().text()).toEqual('Time [UTC]');
    expect(wrap.find(ProposalDepositDesktop)).toHaveLength(1);
  });
});
