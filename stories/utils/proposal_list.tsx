import React from 'react';
import { Data } from '../../src/components/proposal_list/types';
import { AvatarDisplay, Status, Button, } from '../../src';

const Proposer = () => {
  return (
    // <div
    //   style={{
    //     display: 'flex',
    //   }}
    // >
    //   Proposer
    //   &nbsp;
      <AvatarDisplay
        imageUrl="https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg"
        alt="avatar image"
        title="Forbole"
      />
    // </div>
  );
};

const CurrentStatus = () => {
  return (

    <Status
      display="Passed"
    />
  );
};

const CurrentButton = () => {
  return (

    <Button
      display="Vote"
    />
  );
};

export const dummyData: Data[] = [
  {
    id: '#01',
    proposer: <Proposer />,
    title: {
      display: 'Lunie.io on iOS and Android 📱🔥🚀',
      id: '123',
    },
    content: 'Lunie Mobile now available in app stores near you! 📲 iOS - http://bit.ly/lunie-ios 📲 Android - http://bit.ly/lunie-android ❣️This proposal was sent from the Lunie iOS app 😏',
    time: '10 Jan 2020,13:00:22 UTC',
    status: {
      current: true,
      display: 'Vote',
    },
    duration: '(In 12 days)',
    statusComponent: <CurrentButton />,
  },
  {
    id: '#02',
    proposer: <Proposer />,
    title: {
      display: 'Lunie.io on iOS and Android 📱🔥🚀',
      id: '123',
    },
    content: 'Lunie Mobile now available in app stores near you! 📲 iOS - http://bit.ly/lunie-ios 📲 Android - http://bit.ly/lunie-android ❣️This proposal was sent from the Lunie iOS app 😏',
    time: '10 Jan 2020,13:00:22 UTC',
    status: {
      current: false,
      display: 'Passed',
    },
    statusComponent: <CurrentButton />,
  },
  {
    id: '#03',
    proposer: <Proposer />,
    title: {
      display: 'Lunie.io on iOS and Android 📱🔥🚀',
      id: '123',
    },
    content: 'Lunie Mobile now available in app stores near you! 📲 iOS - http://bit.ly/lunie-ios 📲 Android - http://bit.ly/lunie-android ❣️This proposal was sent from the Lunie iOS app 😏',
    time: '10 Jan 2020,13:00:22 UTC',
    status: {
      current: true,
      display: 'Deposit',
    },
    duration: '(In 12 days)',
    statusComponent: <CurrentButton />,
  },
  {
    id: '#04',
    proposer: <Proposer />,
    title: {
      display: 'Lunie.io on iOS and Android 📱🔥🚀',
      id: '123',
    },
    content: 'Lunie Mobile now available in app stores near you! 📲 iOS - http://bit.ly/lunie-ios 📲 Android - http://bit.ly/lunie-android ❣️This proposal was sent from the Lunie iOS app 😏',
    time: '10 Jan 2020,13:00:22 UTC',
    status: {
      current: false,
      display: 'Rejected',
    },
    statusComponent: <CurrentStatus />,
  },
  {
    id: '#05',
    proposer: <Proposer />,
    title: {
      display: 'Lunie.io on iOS and Android 📱🔥🚀',
      id: '123',
    },
    content: 'Lunie Mobile now available in app stores near you! 📲 iOS - http://bit.ly/lunie-ios 📲 Android - http://bit.ly/lunie-android ❣️This proposal was sent from the Lunie iOS app 😏',
    time: '10 Jan 2020,13:00:22 UTC',
    status: {
      current: false,
      display: 'Removed',
    },
    statusComponent: <CurrentStatus />,
  },
  {
    id: '#06',
    proposer: <Proposer />,
    title: {
      display: 'Lunie.io on iOS and Android 📱🔥🚀',
      id: '123',
    },
    content: 'Lunie Mobile now available in app stores near you! 📲 iOS - http://bit.ly/lunie-ios 📲 Android - http://bit.ly/lunie-android ❣️This proposal was sent from the Lunie iOS app 😏',
    time: '10 Jan 2020,13:00:22 UTC',
    status: {
      current: true,
      display: 'Vote',
    },
    duration: '(In 12 days)',
    statusComponent: <CurrentButton />,
  },
];
