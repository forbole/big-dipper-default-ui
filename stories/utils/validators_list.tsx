import React, { useState } from 'react';
import { DataBlockCustom } from './data_block';
import { AvatarDisplay } from '../../src';

export const labelsList = {
  commission: 'Commission',
  active: 'Active Validators',
  inactive: 'Inactive Validators',
  rank: 'Rank',
  moniker: 'Moniker',
  votingPower: 'Voting Power',
  self: 'Self',
  status: 'Status',
};

export const dummyDataInactive = [
  {
    moniker: {
      rawValue: 'Forbole',
      imageUrl: 'https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg',
      displayName: 'Forbsdsfgkbhfskhfsdhole',
      display: <AvatarDisplay
        imageUrl="https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg"
        alt="avatar image"
        title="Forbole"
      />,
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
      visual: <DataBlockCustom />,
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
      imageUrl: 'https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg',
      displayName: 'Forbsdsfgkbhfskhfsdhole',
      display: <AvatarDisplay
        imageUrl="https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg"
        alt="avatar image"
        title="Forbole"
      />,
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
      visual: <DataBlockCustom />,
    },
    status: {
      rawValue: 'active',
      className: 'active',
      display: 'active',
    },
  },
];

export const dummyData = [
  {
    moniker: {
      rawValue: 'Forbole',
      imageUrl: 'https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg',
      displayName: 'Forbsdsfgkbhfskhfsdhole',
      display: <AvatarDisplay
        imageUrl="https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg"
        alt="avatar image"
        title="Forbole"
      />,
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
      visual: <DataBlockCustom />,
    },
    status: {
      rawValue: 'active',
      className: 'active',
      display: 'active',
    },
  },
  {
    moniker: {
      rawValue: 'Forbole1',
      imageUrl: 'https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg',
      displayName: 'Forbsdsfgkbhfskhfsdhole',
      display: <AvatarDisplay
        imageUrl="https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg"
        alt="avatar image"
        title="Forbole1"
      />,
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
      visual: <DataBlockCustom />,
    },
    status: {
      rawValue: 'active',
      className: 'active',
      display: 'active',
    },
  },
  {
    moniker: {
      rawValue: 'Forbole2',
      imageUrl: 'https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg',
      displayName: 'Forbsdsfgkbhfskhfsdhole',
      display: <AvatarDisplay
        imageUrl="https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg"
        alt="avatar image"
        title="Forbole2"
      />,
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
      visual: <DataBlockCustom />,
    },
    status: {
      rawValue: 'active',
      className: 'active',
      display: 'active',
    },
  },
];

/**
 * Helper hook that deals with tab changing in mui Tabs
 */
export const useTabsHook = () => {
  const [value, setValue] = useState(0);

  const handleChange = (_event:any, newValue: number) => {
    setValue(newValue);
  };

  return {
    value,
    handleChange,
  };
};

export const useSearchHook = (callback:any) => {
  const [search, setSearch] = useState('');

  const handleChange = (e:any) => {
    setSearch(e?.target?.value);
  };

  const handleSubmit = () => {
    console.log(`searched with values: ${search}`);
  };

  return {
    value: search,
    handleChange,
    onSearchCallback: handleSubmit,
  };
};
