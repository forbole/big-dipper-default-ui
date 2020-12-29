import React from 'react';
import { mount } from 'enzyme';
import ProposalDepositMobile from '.';
import AvatarDisplay from '../avatar_display';

describe('ProposalDepositMobile', () => {
  it('Works', () => {
    expect(ProposalDepositMobile).toBeTruthy();
    const wrap = mount(
      <ProposalDepositMobile
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
      />,
    );
    expect(wrap).not.toBeNull();
    expect(wrap.find('h1').first().text()).toEqual('Deposits (109.9 ATOM)');
    expect(wrap.find('.amount').first().text()).toEqual('10.8 ATOM');
    expect(wrap.find('.time').first().text()).toEqual('09 Jan 2020, 10:00:19');
    expect(wrap.find(ProposalDepositMobile)).toHaveLength(1);
  });
});
