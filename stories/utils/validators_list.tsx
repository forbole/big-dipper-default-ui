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
};

export const dummyDataInactive = [
  {
    imageUrl: 'https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg',
    displayName: 'Forbsdsfgkbhfskhfsdhole',
    operatorAddress: '312',
    status: {
      className: 'jailed',
      display: 'jailed',
    },
    self: {
      rawValue: 10,
      display: '10%',
    },
    votingPower: {
      rawValue: 1000,
      display: '110,000',
      percentDisplay: '10%',
    },
  },
  {
    imageUrl: 'https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg',
    displayName: 'Forebole',
    operatorAddress: '31265',
    status: {
      className: 'jailed',
      display: 'jailed',
    },
    self: {
      rawValue: 10,
      display: '10%',
    },
    votingPower: {
      rawValue: 1000,
      display: '110,000,08511111111321654649845',
      percentDisplay: '10654654654654654654654564%',
    },
  },
  {
    imageUrl: 'https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg',
    displayName: 'Forbole',
    operatorAddress: '31hj2',
    status: {
      className: 'commission',
      display: 'Commission',
    },
    self: {
      rawValue: 10,
      display: '10%',
    },
    votingPower: {
      rawValue: 1000,
      display: '110,000,08511111111321654649845',
      percentDisplay: '10654654654654654654654564%',
    },
  },
];

export const dummyData = [
  {
    imageUrl: 'https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg',
    displayName: 'Forbsdsfgkbhfskhfsdhole',
    display: <AvatarDisplay
      imageUrl="https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg"
      alt="avatar image"
      title="Forbole"
    />,
    operatorAddress: '312',
    commission: {
      rawValue: 100,
      display: '100%',
    },
    self: {
      rawValue: 10,
      display: '10%',
    },
    votingPower: {
      rawValue: 1000,
      display: '110,000,08511111111321654649845',
      percentDisplay: '10654654654654654654654564%',
      visual: <DataBlockCustom />,
    },
    status: {
      className: 'active',
      display: 'active',
    },
  },
  {
    imageUrl: 'https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg',
    displayName: 'Forbole',
    display: <AvatarDisplay
      imageUrl="https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg"
      alt="avatar image"
      title="Forbole"
    />,
    operatorAddress: 'ce312',
    commission: {
      rawValue: 100,
      display: '100%',
    },
    self: {
      rawValue: 10,
      display: '10%',
    },
    votingPower: {
      rawValue: 1000,
      display: '110,000,08511111111321654649845',
      percentDisplay: '10%',
      visual: <DataBlockCustom />,
    },
    status: {
      className: 'active',
      display: 'active',
    },
  },
  {
    imageUrl: 'https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg',
    displayName: 'Forbole',
    operatorAddress: '3sd12',
    display: <AvatarDisplay
      imageUrl="https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg"
      alt="avatar image"
      title="Forbole"
    />,
    commission: {
      rawValue: 100,
      display: '100%',
    },
    self: {
      rawValue: 10,
      display: '10%',
    },
    votingPower: {
      rawValue: 1000,
      display: '110,000,08511111111321654649845',
      percentDisplay: '10%',
      visual: <DataBlockCustom />,
    },
    status: {
      className: 'active',
      display: 'active',
    },
  },
  {
    imageUrl: 'https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg',
    displayName: 'Forbole',
    operatorAddress: '3v12',
    display: <AvatarDisplay
      imageUrl="https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg"
      alt="avatar image"
      title="Forbole"
    />,
    commission: {
      rawValue: 100,
      display: '100%',
    },
    self: {
      rawValue: 10,
      display: '10%',
    },
    votingPower: {
      rawValue: 1000,
      display: '110,000,08511111111321654649845',
      percentDisplay: '10%',
      visual: <DataBlockCustom />,
    },
    status: {
      className: 'active',
      display: 'active',
    },
  },
  {
    imageUrl: 'https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg',
    displayName: 'Forbole',
    operatorAddress: '31asd2',
    display: <AvatarDisplay
      imageUrl="https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg"
      alt="avatar image"
      title="Forbole"
    />,
    commission: {
      rawValue: 100,
      display: '100%',
    },
    self: {
      rawValue: 10,
      display: '10%',
    },
    votingPower: {
      rawValue: 1000,
      display: '110,000,08511111111321654649845',
      percentDisplay: '10%',
      visual: <DataBlockCustom />,
    },
    status: {
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
