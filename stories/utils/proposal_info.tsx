import React from 'react';
import { Data } from '../../src/components/proposal_list/types';
import { AvatarDisplay } from '../../src';

const Proposer = () => {
  return (
    <AvatarDisplay
      imageUrl="https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg"
      alt="avatar image"
      title="Forbole"
    />
  );
};

const Title = () => {
  return (

    <a
      href="/validators/123"
      style={{
        color: 'black', textDecoration: 'none',
      }}
    >
      Lunie.io on iOS and Android
    </a>
  );
};

export const dummyData: Data = {
  id: '01',
  proposer: <Proposer />,
  title: <Title />,
  content: 'Lunie Mobile now available in app stores near you! 📲 iOS - http://bit.ly/lunie-ios 📲 Android - http://bit.ly/lunie-android ❣️This proposal was sent from the Lunie iOS app 😏',
  time: '10 Jan 2020,13:00:22 UTC',
  status: {
    current: true,
    display: 'Vote',
  },
  duration: '(In 12 days)',
};
