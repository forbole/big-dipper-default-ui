import React from 'react';
import { mount } from 'enzyme';
import { TablePaginationActions } from '../..';
import UserStakingMobile from '.';

describe('UserStakingMobile', () => {
  it('Works', () => {
    expect(UserStakingMobile).toBeTruthy();
    const wrap = mount(
      <UserStakingMobile
        data={[
          {
            address: <div>address</div>,
            amount: '1,000 ATOM',
          },
          {
            address: <div>address</div>,
            amount: '1,000 ATOM',
          },
        ]}
      />,
    );
    expect(wrap).not.toBeNull();
    expect(wrap.find('.validator-staking-mobile')).toHaveLength(1);
    expect(wrap.find('.staking')).toHaveLength(2);
    expect(wrap.find('.staking__redelegate')).toHaveLength(0);
    expect(wrap.find(TablePaginationActions)).toHaveLength(1);
  });
});
