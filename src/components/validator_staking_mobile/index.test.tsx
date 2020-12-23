import React from 'react';
import { mount } from 'enzyme';
import { TablePaginationActions } from './components';
import ValidatorStakingMobile from '.';

describe('ValidatorStakingMobile', () => {
  it('Works', () => {
    expect(ValidatorStakingMobile).toBeTruthy();
    const wrap = mount(
      <ValidatorStakingMobile
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

  it('Redelegations', () => {
    expect(ValidatorStakingMobile).toBeTruthy();
    const wrap = mount(
      <ValidatorStakingMobile
        labels={{
          from: 'From',
          redelegateTo: 'Redelegate To',
        }}
        data={[
          {
            address: <div>address</div>,
            amount: '1,000 ATOM',
            redelegate: {
              from: <div>forbole</div>,
              to: <div>forbole</div>,
            },
          },
          {
            address: <div>address</div>,
            amount: '1,000 ATOM',
            redelegate: {
              from: <div>forbole</div>,
              to: <div>forbole</div>,
            },
          },
        ]}
      />,
    );
    expect(wrap.find('.staking__redelegate')).toHaveLength(2);
  });
});
