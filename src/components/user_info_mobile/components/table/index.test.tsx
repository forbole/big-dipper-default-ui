import React from 'react';
import { mount } from 'enzyme';
import Table from '.';

describe('Table', () => {
  it('Works', () => {
    expect(Table).toBeTruthy();
    const args = {
      tableDefaultProps: {
        delegatedData: [
          {
            validator: {
              className: 'validator',
              rawValue: 'forbole',
              display: <div>forbole</div>,
            },
            amount: {
              className: 'amount',
              rawValue: 4602020,
              display: '4,602,020 ATOM',
            },
          },

        ],
        redelegatedData: [
          {
            validator: {
              className: 'validator',
              rawValue: 'forbole',
              display: <div>forbole</div>,
            },
            amount: {
              className: 'amount',
              rawValue: 4602020,
              display: '4,602,020 ATOM',
            },
          },

        ],
        unbondingData: [
          {
            validator: {
              className: 'validator',
              rawValue: 'forbole',
              display: <div>forbole</div>,
            },
            amount: {
              className: 'amount',
              rawValue: 4602020,
              display: '4,602,020 ATOM',
            },
          },
        ],
      },
      tabProps: {
        delegations: 'Delegations',
        redelegations: 'redelegations',
        unbondings: 'Unbondings',
      },
      classNameTab: '',
      classNameIndicator: '',
    };
    const wrap = mount(
      <Table
        {...args}
      />,
    );
    expect(wrap).not.toBeNull();
    expect(wrap.find(Table)).toHaveLength(1);
  });
});
