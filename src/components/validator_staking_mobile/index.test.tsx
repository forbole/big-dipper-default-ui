import React from 'react';
import { mount } from 'enzyme';
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
        tablePaginationColor="#fffff"
      />,
    );
    expect(wrap).not.toBeNull();
    expect(wrap.find('.validator-staking-mobile')).toHaveLength(1);
    expect(wrap.find('.staking')).toHaveLength(1);
  });
});
