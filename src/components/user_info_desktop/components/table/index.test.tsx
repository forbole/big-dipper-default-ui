import React from 'react';
import { mount } from 'enzyme';
import Table from '.';

describe('Table', () => {
  it('Works', () => {
    expect(Table).toBeTruthy();
    const args = {
      tableDefaultProps: {
        delegatdColumns: [
          {
            label: 'validator',
            display: 'Validator',
            sort: true,
          },
          {
            label: 'amount',
            display: 'Delegated Amount',
            align: 'right',
            sort: true,
          },
          {
            label: 'ratio',
            display: 'Amt. Ratio',
            align: 'right',
            sort: true,
          },
          {
            label: 'reward',
            display: 'Reward',
            align: 'right',
            sort: true,
          },
          {
            label: 'commission',
            display: 'Commission',
            align: 'right',
            sort: true,
          },
          {
            label: 'VPRatios',
            display: 'VR Ratio',
            align: 'right',
            sort: true,
          },
          {
            label: 'last7Days',
            display: 'Last 7 days',
            align: 'right',
            sort: true,
          },
        ],
        redelegatedColumns: [
          {
            label: 'validator',
            display: 'Validator',
            sort: true,
          },
          {
            label: 'height',
            display: 'Height',
            sort: true,
          },
          {
            label: 'amount',
            display: 'redelegated Amount',
            align: 'right',
            sort: true,
          },
          {
            label: 'remainAmount',
            display: 'Remain Amount',
            align: 'right',
            sort: true,
          },
          {
            label: 'expectedDelivery',
            display: 'Expected Delivery',
            align: 'right',
            sort: true,
          },
        ],
        unbondingColumns: [
          {
            label: 'validator',
            display: 'Validator',
            sort: true,
          },
          {
            label: 'height',
            display: 'Height',
            sort: true,
          },
          {
            label: 'amount',
            display: 'Unbonded Amount',
            align: 'right',
            sort: true,
          },
          {
            label: 'remainAmount',
            display: 'Remain Amount',
            align: 'right',
            sort: true,
          },
          {
            label: 'expectedDelivery',
            display: 'Expected Delivery',
            align: 'right',
            sort: true,
          },
        ],
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
            ratio: {
              className: 'ratio',
              rawValue: 77,
              display: '0.77%',
            },
            reward: {
              className: 'reward',
              rawValue: 1122.969256,
              display: '1,122.969256 ATOM',
            },
            commission: {
              className: 'commission',
              rawValue: '5',
              display: '5.00%',
            },
            VPRatios: {
              className: 'VPRatios',
              rawValue: 0.18,
              display: '0.18%',
            },
            last7Days: {
              className: 'last7Days',
              rawValue: 1,
              display: <div>forbole</div>,
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
            height: {
              className: 'height',
              rawValue: 1503609,
              display: '1,503,609',
            },
            amount: {
              className: 'delegatedAmount',
              rawValue: 1602020.799998,
              display: '1,602,020.799998 ATOM',
            },
            remainAmount: {
              className: 'remainAmount',
              rawValue: 4602020.799998,
              display: '4,602,020.799998 ATOM',
            },
            expectedDelivery: {
              className: 'expectedDelivery',
              rawValue: '20 Jan 2020, 19:27:20 (In 7 days)',
              display: '20 Jan 2020, 19:27:20 (In 7 days)',
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
            height: {
              className: 'height',
              rawValue: 2503609,
              display: '2,503,609',
            },
            amount: {
              className: 'amount',
              rawValue: 7202020.799998,
              display: '7,202,020.799998 ATOM',
            },
            remainAmount: {
              className: 'remainAmount',
              rawValue: 4602020.799998,
              display: '4,602,020.799998 ATOM',
            },
            expectedDelivery: {
              className: 'expectedDelivery',
              rawValue: '20 Jan 2020, 19:27:20 (In 7 days)',
              display: '20 Jan 2020, 19:27:20 (In 7 days)',
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
    expect(wrap.find('.label__validator').first().text()).toEqual('Validator');
    expect(wrap.find(Table)).toHaveLength(1);
  });
});
