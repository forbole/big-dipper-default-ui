import React from 'react';
import { Data } from '../../src/components/validator_staking_desktop/types';
import { AvatarDisplay } from '../../src';

const Address = () => {
  return (
    <AvatarDisplay
      imageUrl="https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg"
      alt="avatar image"
      title="Forbole"
    />
  );
};

export const dummyLabelMobile = {
  address: 'Address',
};

export const dummyLabelDesktop = {
  address: 'Address',
  amount: 'Amount',
};

export const dummyData:Data[] = [
  {
    address: <Address />,
    amount: '1,000 ATOM',
  },
  {
    address: <Address />,
    amount: '1,000 ATOM',
  },
  {
    address: <Address />,
    amount: '1,000 ATOM',
  },
  {
    address: <Address />,
    amount: '1,000 ATOM',
  },
  {
    address: <Address />,
    amount: '1,000 ATOM',
  },
  {
    address: <Address />,
    amount: '1,000 ATOM',
  },
];
