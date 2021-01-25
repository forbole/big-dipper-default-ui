import React from 'react';
import { mount } from 'enzyme';
import UserInfoMobile from '.';

describe('UserInfoMobile', () => {
  it('Works', () => {
    expect(UserInfoMobile).toBeTruthy();
    const args = {
      title: 'Account Details',
      addressContent: {
        img: 'https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg',
        alt: '',
        address: {
          title: 'Address',
          display: 'cosmos14kn0k…swhp',
          rawValue: 'cosmos14kn0k…swhp',
        },
        rewardAddress: {
          title: 'Reward Address',
          display: 'cosmos14kn0k…swhp',
          rawValue: 'cosmos14kn0k…swhp',
        },
      },
      chart: {
        total: {
          title: 'Total ATOM',
          subTitle: '$3.22/ATOM',
        },
        totalDollar: {
          title: '6,574,315.38',
          subTitle: '$21,169,295.52',
        },
        colors: ['#FD248C', '#1D86FF', '#FFA716', '#1EC490', '#9D2DFF'],
        data: [
          {
            title: 'Available',
            value: 111189.15,
            display: '111,189.15 ATOM',
          },
          {
            title: 'Delegate',
            value: 458003.25,
            display: '6,458,003.25 ATOM',
          },
          {
            title: 'Unbonding',
            value: 156.00,
            display: '156.00 ATOM',
          },
          {
            title: 'Reward',
            value: 5122.96,
            display: '5,122.96 ATOM',
          },
          {
            title: 'Commission',
            value: 1324.91,
            display: '1,324.91 ATOM',
          },
        ],
        customComponent: <div>I am a diagram</div>,
      },
      tabProps: {
        delegations: 'Delegations',
        redelegations: 'redelegations',
        unbondings: 'Unbondings',
      },
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
              className: 'delegatedAmount',
              rawValue: 1602020.799998,
              display: '1,602,020.799998 ATOM',
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
              rawValue: 7202020.799998,
              display: '7,202,020.799998 ATOM',
            },
          },
        ],
      },
    };
    const wrap = mount(
      <UserInfoMobile
        {...args}
      />,
    );
    expect(wrap).not.toBeNull();
    expect(wrap.find(UserInfoMobile)).toHaveLength(1);
  });
});
