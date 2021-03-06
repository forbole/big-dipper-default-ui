import React from 'react';
import {
  AvatarDisplay, Avatar,
} from '../../src';

export const labelsList = {
  commission: 'Commission',
  rank: 'Rank',
  moniker: 'Moniker',
  votingPower: 'Voting Power',
  self: 'Self',
  status: 'Status',
  condition: {
    display: 'Condition',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu tristique lorem, id commodo lectus. In faucibus sem eu tellus gravida, id blandit ex tincidunt. Nam tincidunt dolor eros, eget porttitor metus co',
  },
};

export const getInactiveDummy = (device: string) => {
  const display = device === 'mobile' ? 'Forbole' : (
    <AvatarDisplay
      imageUrl="https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg"
      alt="avatar image"
      title="Forbole"
    />
  );

  const avatar = (
    <Avatar
      imageUrl="https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg"
      alt="avatar image"
    />
  );
  return (
    [
      {
        moniker: {
          rawValue: 'Forbole',
          avatar,
          display,
        },
        operatorAddress: '31afsdff2',
        self: {
          rawValue: 10,
          display: '10%',
        },
        votingPower: {
          rawValue: 1000,
          display: '110',
          percentDisplay: '106%',
        },
        status: {
          rawValue: 'active',
          className: 'active',
          display: 'active',
        },
      },
      {
        moniker: {
          rawValue: 'Forbole',
          avatar,
          display,
        },
        operatorAddress: '311342',
        self: {
          rawValue: 10,
          display: '10%',
        },
        votingPower: {
          rawValue: 1000,
          display: '110,000',
          percentDisplay: '10%',
        },
        status: {
          rawValue: 'active',
          className: 'active',
          display: 'active',
        },
      },
    ]
  );
};

export const getActiveDummy = (device: string) => {
  const display = device === 'mobile' ? 'Forbole' : (
    <AvatarDisplay
      imageUrl="https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg"
      alt="avatar image"
      title="Forbole"
    />
  );

  const avatar = (
    <Avatar
      imageUrl="https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg"
      alt="avatar image"
    />
  );
  return (
    [
      {
        moniker: {
          rawValue: 'Forbole',
          avatar,
          display,
        },
        operatorAddress: '3s12',
        commission: {
          rawValue: 90,
          display: '90%',
        },
        self: {
          rawValue: 11,
          display: '11%',
        },
        votingPower: {
          rawValue: 10,
          display: '10',
          percentDisplay: '45%',
        },
        status: {
          rawValue: 'active',
          className: 'active',
          display: 'active',
        },
        condition: {
          className: 'healthy',
          rawValue: 'healthy',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna libero, mattis nec ultrices sit amet, pharetra vitae lorem. Quisque pretium pulvinar eros,',
        },
      },
      {
        moniker: {
          rawValue: 'Forbole1',
          avatar,
          display,
        },
        operatorAddress: '312',
        commission: {
          rawValue: 10,
          display: '10%',
        },
        self: {
          rawValue: 10,
          display: '10%',
        },
        votingPower: {
          rawValue: 55,
          display: '55',
          percentDisplay: '5%',
        },
        status: {
          rawValue: 'active',
          className: 'active',
          display: 'active',
        },
        condition: {
          className: 'healthy',
          rawValue: 'healthy',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna libero, mattis nec ultrices sit amet, pharetra vitae lorem. Quisque pretium pulvinar eros,',
        },
      },
      {
        moniker: {
          rawValue: 'Forbole2',
          avatar,
          display,
        },
        operatorAddress: '31loo2',
        commission: {
          rawValue: 100,
          display: '100%',
        },
        self: {
          rawValue: 9,
          display: '9%',
        },
        votingPower: {
          rawValue: 1000,
          display: '110,000',
          percentDisplay: '10%',
        },
        status: {
          rawValue: 'active',
          className: 'active',
          display: 'active',
        },
        condition: {
          className: 'healthy',
          rawValue: 'healthy',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna libero, mattis nec ultrices sit amet, pharetra vitae lorem. Quisque pretium pulvinar eros,',
        },
      },
    ]
  );
};
