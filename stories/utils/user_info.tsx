import React from 'react';
import classnames from 'classnames';
import {
  AvatarDisplay,
  InfoPopover,
} from '../../src';

const ProposerData = () => {
  return (
    <AvatarDisplay
      imageUrl="https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg"
      alt="avatar image"
      title="Forbole"
    />
  );
};

export const delegate = {
  validator: {
    className: 'validator',
    rawValue: 'forbole',
    display: <ProposerData />,
  },
  amount: {
    className: 'delegatedAmount',
    rawValue: 4602020.799998,
    display: '4,602,020.799998 ATOM',
  },
  amountRatio: {
    className: 'votingPowerPercentage',
    rawValue: 77,
    display: '0.77%',
  },
  reward: {
    className: 'votingPowerOverride',
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
    display: <ProposerData />,
  },
};

export const redelegate = {
  validator: {
    className: 'validator',
    rawValue: 'forbole',
    display: <ProposerData />,
  },
  height: {
    className: 'height',
    rawValue: 2503609,
    display: '2,503,609',
  },
  amount: {
    className: 'delegatedAmount',
    rawValue: 4602020.799998,
    display: '4,602,020.799998 ATOM',
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
};

export const unbonded = {
  validator: {
    className: 'validator',
    rawValue: 'forbole',
    display: <ProposerData />,
  },
  height: {
    className: 'height',
    rawValue: 2503609,
    display: '2,503,609',
  },
  amount: {
    className: 'amount',
    rawValue: 4602020.799998,
    display: '4,602,020.799998 ATOM',
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
};

export const dummyData: any = {
  title: 'Account Details',
  address: {
    img: 'https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg',
    alt: '',
    address: {
      title: 'Address',
      address: 'cosmos14kn0k…swhp',
    },
    rewardAddress: {
      title: 'Address',
      address: 'cosmos14kn0k…swhp',
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
  },
  tabProps: {
    delegations: 'Delegations',
    redelegations: 'redelegations',
    unbondings: 'Unbondings',
  },
  tableDefaultProps: {
    data: [
      {

      },
    ],
  },
};
