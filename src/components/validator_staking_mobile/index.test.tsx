import React from 'react';
import { mount } from 'enzyme';
import {
  Table,
  TableHead,
} from '@material-ui/core';
import ValidatorStakingMobile from '.';

describe('ValidatorStakingMobile', () => {
  it('Works', () => {
    expect(ValidatorStakingMobile).toBeTruthy();
    const wrap = mount(
      <ValidatorStakingMobile
        data={[{
          address: <div>address</div>,
          amount: '1,000 ATOM',
        },
        ]}
      />,
    );
    expect(wrap).not.toBeNull();

    expect(wrap.find('.validator-staking-mobile')).toHaveLength(1);
    expect(wrap.find(Table)).toHaveLength(1);
    expect(wrap.find(TableHead)).toHaveLength(1);
  });
});
