import React from 'react';
import { Proposer } from '../../src/components/consensus/types';
import { AvatarDisplay } from '../../src';

const ProposerData = () => {
  return (
    <AvatarDisplay
      imageUrl="https://s3.amazonaws.com/keybase_processed_uploads/f5b0771af36b2e3d6a196a29751e1f05_360_360.jpeg"
      alt="avatar image"
      title="Forbole"
    />
  );
};

export const dummyProposer: Proposer = {
  title: 'Proposer',
  display: <ProposerData />,
};
