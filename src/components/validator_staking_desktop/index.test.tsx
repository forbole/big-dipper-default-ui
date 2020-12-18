import React from 'react';
import { mount } from 'enzyme';
import {
  Table,
  TableHead,
} from '@material-ui/core';
import ValidatorStakingDesktop from '.';

describe('ValidatorStakingDesktop', () => {
  it('Works', () => {
    expect(ValidatorStakingDesktop).toBeTruthy();
    const wrap = mount(
      <ValidatorStakingDesktop
        labels={
          {
            address: 'Address',
            amount: 'Amount',
          }
        }
        data={[{
          address: <div>address</div>,
          amount: '1,000 ATOM',
        },
        ]}
      />,
    );
    expect(wrap).not.toBeNull();

    expect(wrap.find('.validator-staking-desktop')).toHaveLength(1);
    expect(wrap.find(Table)).toHaveLength(1);
    expect(wrap.find(TableHead)).toHaveLength(1);
  });
});
